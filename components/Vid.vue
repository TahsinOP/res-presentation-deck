<script setup>
import { computed, ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

// Silent looping clip that restarts each time its slide is entered and pauses when it is
// left, so a video never runs on in the background of another slide.
//   <Vid src="videos/coop.mp4" caption="Hardware, 2× speed" />
// `src` is relative to public/ and is prefixed with the build base, so the same deck
// works under `slidev dev` (/) and on GitHub Pages (/gehrig-talk/). The poster defaults to
// public/posters/<name>.jpg, which is also what the PDF export shows. If the clip is
// missing, a dashed placeholder with `placeholder` text stands in until the file is added.
const props = defineProps({
  src: { type: String, required: true },
  caption: { type: String, default: '' },
  poster: { type: String, default: '' },
  height: { type: String, default: '20rem' },
  controls: { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
  // Fill exactly `height` (letterboxed) instead of using it as a cap, so a clip lines up
  // with <Pic> images of the same height in a row.
  fill: { type: Boolean, default: false },
})

const base = import.meta.env.BASE_URL
const url = p => (p ? base + p.replace(/^\//, '') : undefined)
const v = ref(null)
const missing = ref(false)
const srcUrl = computed(() => url(props.src))
const posterUrl = computed(() => url(props.poster || props.src.replace('videos/', 'posters/').replace(/\.mp4$/, '.jpg')))

onSlideEnter(() => {
  if (!v.value) return
  v.value.currentTime = 0
  v.value.play().catch(() => {})
})
onSlideLeave(() => v.value?.pause())
</script>

<template>
  <figure class="vid">
    <div v-if="missing" class="vid-missing" :style="{ height }">{{ placeholder || `Add public/${src}` }}</div>
    <video
      v-else ref="v" :src="srcUrl" :poster="posterUrl" :controls="controls" :style="fill ? { height } : { maxHeight: height }"
      muted loop playsinline preload="auto" @error="missing = true"
    />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.vid { margin: 0; display: flex; flex-direction: column; gap: 0.4rem; }
.vid video {
  width: 100%; object-fit: contain; background: var(--surface-bg);
  border: var(--surface-border); border-radius: var(--radius);
}
.vid-missing {
  display: flex; align-items: center; justify-content: center; text-align: center; padding: 1rem;
  border: 2px dashed var(--line); border-radius: var(--radius); color: var(--fg-dim); font-size: 0.8rem;
}
.vid figcaption { font-size: 0.72rem; color: var(--fg-dim); letter-spacing: 0.02em; }
</style>
