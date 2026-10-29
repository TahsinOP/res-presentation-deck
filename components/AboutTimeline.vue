<script setup>
import { onUnmounted, ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

// Photo timeline for the About me slide: one picture per step, on a shared line,
// revealed left to right on slide enter (static in print/export).
//   <AboutTimeline />
// `img` is relative to public/ and is prefixed with the build base.
const EVENTS = [
  { date: '2021–25', title: 'BTech Mechanical Eng.', where: 'NIT Karnataka', desc: 'Minor in Electronics and Communication', img: 'img/about-nitk.jpg' },
  { date: '2024–25', title: 'Review paper', where: 'during BTech', desc: 'Soft mobile manipulators, Industrial Robot 2026, first author', img: 'img/about-samm.jpg', fit: 'contain' },
  { date: 'May 2025', title: 'eYSIP research intern', where: 'IIT Bombay', desc: 'Visual SLAM for a UAV', img: 'img/about-eysip.jpg' },
  { date: 'Aug 2025 →', title: 'ERTS Lab', where: 'e-Yantra, IIT Bombay', desc: 'Senior Project Technical Assistant', img: 'img/about-erts.jpg' },
  { date: 'Feb 2026 →', title: 'Cooperative transport', where: 'IIT Bombay', desc: 'Research project', img: 'img/about-coop.jpg' },
]
const src = p => import.meta.env.BASE_URL + p

const shown = ref(false)
let t = null
function play() { shown.value = false; clearTimeout(t); t = setTimeout(() => (shown.value = true), 60) }
onSlideEnter(play)
onSlideLeave(() => { clearTimeout(t) })
onUnmounted(() => clearTimeout(t))
</script>

<template>
  <div class="at" :class="{ on: shown }">
    <div v-for="(e, i) in EVENTS" :key="e.date" class="at-item" :style="{ transitionDelay: `${i * 120}ms` }">
      <img :src="src(e.img)" :alt="e.title" :style="{ objectFit: e.fit || 'cover' }" />
      <div class="at-dot" />
      <div class="at-date">{{ e.date }}</div>
      <div class="at-title">{{ e.title }}</div>
      <div class="at-where">{{ e.where }}</div>
      <div class="at-desc">{{ e.desc }}</div>
    </div>
  </div>
</template>

<style scoped>
.at { position: relative; display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.1rem; margin-top: 1rem; }
/* the shared line runs through the dots, just below the photos */
.at::before {
  content: ""; position: absolute; left: 0; right: 0; top: calc(8.5rem + 1.05rem); height: 2px; background: var(--line);
}
.at-item { position: relative; opacity: 0; translate: 0 0.5rem; transition: opacity 0.5s var(--motion-ease, ease), translate 0.5s var(--motion-ease, ease); }
.at.on .at-item { opacity: 1; translate: 0 0; }
.at-item img {
  width: 100%; height: 8.5rem; display: block; background: #fff;
  border: var(--surface-border); border-radius: var(--radius);
}
.at-dot {
  width: 13px; height: 13px; border-radius: 50%; background: var(--accent);
  margin: 0.7rem 0 0; position: relative; z-index: 1; box-shadow: 0 0 0 4px var(--ink, var(--bg));
}
.at-date { font: 600 0.72rem/1 var(--font-mono); letter-spacing: 0.08em; color: var(--accent); margin: 0.8rem 0 0.45rem; }
.at-title { font-family: var(--font-display); font-weight: var(--w-display); font-size: 1.02rem; line-height: 1.2; }
.at-where { font-size: 0.8rem; color: var(--fg); margin-top: 0.15rem; }
.at-desc { font-size: 0.78rem; line-height: 1.35; color: var(--fg-dim); margin-top: 0.3rem; }

@media print { .at-item { opacity: 1 !important; translate: 0 0 !important; } }
</style>
