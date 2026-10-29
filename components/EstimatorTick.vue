<script setup>
import { computed, onUnmounted, ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

// One 200 ms window of the grasp filter: 30 Hz wrist-camera detections arriving into a
// 50 Hz estimator tick. Each tick runs Algorithm 1 in a fixed order:
//   update (only if a detection arrived and passes the χ² gate)  →  P ← P + P_min.
// The bar is the scalar sketch from the project docs (σ_R = 2 mm, floor 10 mm, Q = 0),
// so the published σ never drops below the floor. Detection 4 is a planted outlier
// (grazing view of the board), rejected by the gate. Schematic, not logged data.
//   <EstimatorTick />

const PERIOD = 20                          // ms, 50 Hz tick
const TICKS = Array.from({ length: 10 }, (_, i) => i * PERIOD)
const DETS = Array.from({ length: 6 }, (_, i) => ({ t: (i * 1000) / 30, bad: i === 3 }))
const F = 10 ** 2                          // floor variance, mm²
const R = 2 ** 2                           // measurement variance, mm²

// Which detection (if any) each tick consumes: the newest one since the previous tick.
const consumed = TICKS.map((t, k) => {
  const prev = k === 0 ? -1 : TICKS[k - 1]
  return DETS.findIndex(d => d.t > prev && d.t <= t + 1e-9)
})

// Pre-compute the scalar covariance after each tick, starting from the steady state.
const rows = (() => {
  let p = (F + Math.sqrt(F * F + 4 * F * R)) / 2
  return TICKS.map((t, k) => {
    const d = consumed[k]
    let kind = 'floor'
    if (d >= 0 && DETS[d].bad) kind = 'reject'
    else if (d >= 0) { kind = 'update'; p = (p * R) / (p + R) }
    p += F
    return { t, d, kind, sigma: Math.sqrt(p) }
  })
})()

const LABEL = {
  update: 'detection → χ² gate passes → update → + P_min',
  reject: 'detection → NIS > 16.8, rejected → + P_min only',
  floor: 'no new detection → + P_min only',
}

const k = ref(-1)
const cur = computed(() => (k.value >= 0 ? rows[k.value] : null))
const x = t => 40 + (t / 200) * 520
const SMAX = 20
const barH = s => (Math.min(s, SMAX) / SMAX) * 100

let timer = null
const running = ref(false)
function stop() { clearInterval(timer); timer = null; running.value = false }
function play() {
  stop()
  k.value = -1
  running.value = true
  timer = setInterval(() => {
    if (k.value < rows.length - 1) k.value++
    else stop()
  }, 900)
}
function pick(i) { stop(); k.value = i }

onSlideEnter(play)
onSlideLeave(stop)
onUnmounted(stop)
</script>

<template>
  <div class="et" data-fit-grow>
    <div class="et-card">
      <svg viewBox="0 0 600 132" class="et-svg" role="img" aria-label="Detections and estimator ticks over 200 ms">
        <text x="0" y="34" class="et-lab">camera</text>
        <text x="0" y="46" class="et-lab dim">30 Hz</text>
        <text x="0" y="94" class="et-lab">filter</text>
        <text x="0" y="106" class="et-lab dim">50 Hz</text>
        <line x1="40" x2="560" y1="40" y2="40" class="et-axis" />
        <line x1="40" x2="560" y1="100" y2="100" class="et-axis" />

        <!-- detection → consuming tick -->
        <g v-for="(r, i) in rows" :key="'l' + i">
          <line
            v-if="r.d >= 0" :x1="x(DETS[r.d].t)" y1="46" :x2="x(r.t)" y2="92"
            class="et-link" :class="{ seen: i <= k, bad: r.kind === 'reject' }"
          />
        </g>
        <g v-for="(d, i) in DETS" :key="'d' + i">
          <circle :cx="x(d.t)" cy="40" r="6" class="et-det" :class="{ bad: d.bad }" />
          <text v-if="d.bad" :x="x(d.t)" y="22" class="et-note bad">outlier</text>
        </g>
        <g v-for="(r, i) in rows" :key="'t' + i" class="et-tick" @click.stop="pick(i)">
          <rect
            :x="x(r.t) - 7" y="93" width="14" height="14" rx="2"
            :class="[r.kind, { on: i === k, past: i < k }]"
          />
          <text :x="x(r.t)" y="124" class="et-ms">{{ r.t }}</text>
        </g>
        <line v-if="cur" :x1="x(cur.t)" :x2="x(cur.t)" y1="10" y2="112" class="et-cursor" />
      </svg>

      <div class="et-side">
        <div class="et-bar-wrap">
          <div class="et-bar" :class="cur?.kind" :style="{ height: `${cur ? barH(cur.sigma) : 0}%` }" />
          <div class="et-line floor" :style="{ bottom: `${barH(10)}%` }"><span>floor 10 mm</span></div>
          <div class="et-line meas" :style="{ bottom: `${barH(2)}%` }"><span>camera σ 2 mm</span></div>
        </div>
        <div class="et-val mono">σ {{ cur ? cur.sigma.toFixed(1) : '–' }} mm</div>
      </div>
    </div>

    <div class="et-foot">
      <span><b class="mono">{{ cur ? `t = ${cur.t} ms` : 'ready' }}</b>&nbsp; {{ cur ? LABEL[cur.kind] : 'each tick: update if a detection passed the gate, then add the floor' }}</span>
      <button class="et-pill" @click.stop="running ? stop() : play()">{{ running ? '❚❚ Pause' : '↻ Replay' }}</button>
    </div>
  </div>
</template>

<style scoped>
.et { display: flex; flex-direction: column; gap: 0.5rem; width: 100%; }
.mono { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
.et-card {
  display: grid; grid-template-columns: 1fr 7.5rem; gap: 1rem; align-items: stretch;
  background: var(--surface-bg); border: var(--surface-border); border-radius: var(--radius); padding: 0.7rem 1rem;
}
.et-svg { width: 100%; height: auto; overflow: visible; }
.et-lab { font-size: 11px; fill: var(--fg); font-weight: 600; }
.et-lab.dim { fill: var(--fg-dim); font-weight: 400; }
.et-ms { font-size: 9px; fill: var(--fg-dim); text-anchor: middle; font-family: var(--font-mono); }
.et-note { font-size: 9px; text-anchor: middle; }
.et-note.bad { fill: var(--accent); }
.et-axis { stroke: var(--line); stroke-width: 1; }
.et-det { fill: color-mix(in oklab, var(--fg) 55%, transparent); }
.et-det.bad { fill: none; stroke: var(--accent); stroke-width: 2; }
.et-link { stroke: var(--line); stroke-width: 1; stroke-dasharray: 3 3; transition: stroke 0.3s; }
.et-link.seen { stroke: color-mix(in oklab, var(--fg) 55%, transparent); }
.et-link.seen.bad { stroke: var(--accent); }
.et-tick { cursor: pointer; }
.et-tick rect { fill: var(--surface-bg); stroke: color-mix(in oklab, var(--fg) 35%, transparent); stroke-width: 1; transition: fill 0.3s; }
.et-tick rect.past.update, .et-tick rect.on.update { fill: color-mix(in oklab, var(--fg) 60%, transparent); }
.et-tick rect.past.reject, .et-tick rect.on.reject { fill: var(--accent); stroke: var(--accent); }
.et-tick rect.past.floor, .et-tick rect.on.floor { fill: color-mix(in oklab, var(--fg) 15%, transparent); }
.et-tick rect.on { stroke-width: 2; stroke: var(--fg); }
.et-cursor { stroke: var(--accent); stroke-width: 1; opacity: 0.6; }

.et-side { display: flex; flex-direction: column; gap: 0.35rem; }
.et-bar-wrap {
  position: relative; flex: 1; min-height: 6.5rem; border-left: 1px solid var(--line); border-bottom: 1px solid var(--line);
}
.et-bar {
  position: absolute; bottom: 0; left: 0.6rem; width: 1.6rem; border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  background: color-mix(in oklab, var(--fg) 45%, transparent); transition: height 0.6s var(--motion-ease, ease), background 0.3s;
}
.et-bar.reject { background: var(--accent); }
.et-line { position: absolute; left: 0; right: 0; border-top: 1px dashed var(--fg-dim); }
.et-line span { position: absolute; right: 0; top: -0.95rem; font-size: 0.58rem; color: var(--fg-dim); white-space: nowrap; }
.et-line.floor { border-color: var(--accent); }
.et-line.floor span { color: var(--accent); }
.et-val { font-size: 0.78rem; font-weight: var(--w-strong); }

.et-foot { display: flex; justify-content: space-between; align-items: center; gap: 1rem; font-size: 0.78rem; color: var(--fg-dim); }
.et-foot b { color: var(--fg); }
.et-pill {
  padding: 0.25rem 0.7rem; border: var(--surface-border); border-radius: 999px; background: var(--accent); color: var(--on-accent);
  font: inherit; font-size: 0.72rem; font-weight: var(--w-strong); cursor: pointer; min-width: 6.4rem; white-space: nowrap;
}
</style>
