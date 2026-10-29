<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
// Auto fit-to-frame: if content is taller than the available area, scale it down (never up).
// transform doesn't affect layout, so scrollHeight stays truthful and there's no feedback loop.
const FLOOR = 0.42  // never shrink below this — past it text is illegible; the slide should be split
const CEIL = 1.3    // opted-in content under a title grows to fill spare room, up to this (deck override)
const outer = ref(null), inner = ref(null), scale = ref(1), overflow = ref(false)
let ro, warned = false

// Available height. outer is `.fit { height:100% }`, which is correct under Slidev's dev
// canvas — but a one-shot export host (tela renders via `slidev export`) can leave the
// percentage-height chain unresolved, inflating outer.clientHeight so nothing ever scales
// and the centered title overflows + clips. So also derive the height from the real visible
// frame (`.slidev-layout`, which has overflow:hidden + a definite height) and take the
// smaller. Layout px throughout (offsetTop, clientHeight) — immune to Slidev's slide transform.
function avail () {
  let a = outer.value.clientHeight
  const frame = outer.value.closest('.slidev-layout')
  if (frame) {
    let top = 0, el = outer.value
    while (el && el !== frame) { top += el.offsetTop; el = el.offsetParent }
    // Centered layouts (.l-center) have a symmetric inset. Under a title (.l-body) the
    // content starts lower than the bottom inset, so use the frame's bottom padding instead.
    // (Deck override of the theme's Fit, which always assumed a symmetric inset.)
    const bottom = outer.value.closest('.l-center') ? top : parseFloat(getComputedStyle(frame).paddingBottom) || 0
    const framed = frame.clientHeight - top - bottom
    if (framed > 0) a = Math.min(a, framed)
  }
  return a
}

// Grow content under a title (.l-body) with CSS zoom, which reflows within the width, until it
// fills the free height. Only slides holding a [data-fit-grow] component (the interactive demos)
// grow. Returns the zoom used; 1 when there is no room, no opt-in, or it is a centered layout.
function grow (av) {
  const el = inner.value
  el.style.zoom = ''
  if (!outer.value.closest('.l-body') || !el.querySelector('[data-fit-grow]')) return 1
  const k = outer.value.getBoundingClientRect().height / outer.value.clientHeight  // screen px per layout px
  const fits = (z) => {
    el.style.zoom = z
    return el.getBoundingClientRect().height <= av * k + 1 && el.scrollWidth <= el.clientWidth + 1
  }
  if (!fits(1)) { el.style.zoom = ''; return 1 }
  let lo = 1, hi = CEIL
  for (let i = 0; i < 8; i++) { const mid = (lo + hi) / 2; fits(mid) ? lo = mid : hi = mid }
  el.style.zoom = lo > 1.02 ? lo : ''
  return lo
}

function fit () {
  if (!outer.value || !inner.value) return
  const av = avail()
  if (av && grow(av) > 1.02) { scale.value = 1; overflow.value = false; return }
  const h = inner.value.scrollHeight
  if (!av || !h) return  // not laid out yet (inactive / 0×0 slide) — a later signal will re-fit
  const ideal = av / h
  scale.value = h > av + 1 ? Math.max(FLOOR, ideal) : 1
  // Even at the floor the content still spills the frame — an author signal to split the slide.
  // Surfaced as a one-shot console warning (visible in `slidev dev`/export) and a DOM attribute
  // so a render gate (qa harness) or tela can detect it programmatically.
  overflow.value = ideal < FLOOR
  if (overflow.value && !warned) {
    warned = true
    console.warn(`[tahta] slide content overflows even at min scale (${FLOOR}): ${Math.round(h)}px of content in a ${Math.round(av)}px frame — split this slide or trim its content.`)
  }
}
onMounted(() => {
  fit()
  ro = new ResizeObserver(() => fit()); ro.observe(inner.value); ro.observe(outer.value)
  requestAnimationFrame(fit)              // re-fit after first layout/paint settles
  // Web fonts swap in after mount and reflow the text; without this re-measure a one-shot
  // export can snapshot the pre-swap (unscaled) state with the final font already painted.
  if (typeof document !== 'undefined' && document.fonts) document.fonts.ready.then(fit)
})
onBeforeUnmount(() => ro?.disconnect())
</script>

<template>
  <!-- When scaling, top-align: transform-origin is top so the shrunk content must
       grow from the top edge, not center on its unscaled (taller) box and bleed upward. -->
  <div ref="outer" class="fit" :data-fit-overflow="overflow || null" :style="{ justifyContent: scale < 1 ? 'flex-start' : null }">
    <div ref="inner" class="fit-inner" :style="{ transform: `scale(${scale})` }"><slot /></div>
  </div>
</template>
