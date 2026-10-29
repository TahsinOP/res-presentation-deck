<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

// Click-driven timeline for the About me slide: every step is visible but dimmed, and each
// click lights the next one and fills the line up to it. Needs `clicks: 4` in the slide's
// frontmatter (one click per step after the first). Print/export shows every step lit.
//   <AboutTimeline />
const EVENTS = [
  { date: '2021–25', icon: 'lucide:graduation-cap', title: 'BTech Mechanical Eng.', where: 'NIT Karnataka', desc: 'Minor in Electronics and Communication' },
  { date: '2024–25', icon: 'lucide:book-open', title: 'Review paper', where: 'During BTech', desc: 'Soft mobile manipulators, Industrial Robot 2026, first author' },
  { date: 'May 2025', icon: 'lucide:map', title: 'eYSIP research intern', where: 'IIT Bombay', desc: 'Visual SLAM for a UAV' },
  { date: 'Aug 2025 →', icon: 'lucide:users', title: 'ERTS Lab', where: 'e-Yantra, IIT Bombay', desc: 'Senior Project Technical Assistant' },
  { date: 'Feb 2026 →', icon: 'lucide:bot', title: 'Cooperative transport', where: 'IIT Bombay', desc: 'Research project' },
]

const { $clicks, $renderContext } = useSlideContext()
const printing = computed(() => ['print', 'export', 'overview'].includes($renderContext.value))
const step = computed(() => (printing.value ? EVENTS.length - 1 : Math.min($clicks.value, EVENTS.length - 1)))
// Line fill runs from the first dot to the current one; dots sit at the centre of each column.
const fill = computed(() => `${(step.value / EVENTS.length) * 100}%`)
</script>

<template>
  <div class="at" :style="{ '--n': EVENTS.length, '--fill': fill }">
    <div class="at-track"><div class="at-fill" /></div>
    <div
      v-for="(e, i) in EVENTS" :key="e.date" class="at-item"
      :class="{ lit: i <= step, now: i === step && !printing }"
    >
      <div class="at-date">{{ e.date }}</div>
      <div class="at-node"><Icon :name="e.icon" size="1.25rem" /></div>
      <div class="at-title">{{ e.title }}</div>
      <div class="at-where">{{ e.where }}</div>
      <div class="at-desc">{{ e.desc }}</div>
    </div>
  </div>
</template>

<style scoped>
.at { position: relative; display: grid; grid-template-columns: repeat(var(--n), 1fr); margin-top: 2.5rem; }
/* line through the node centres: starts at the first column's centre, ends at the last */
.at-track {
  position: absolute; top: calc(0.72rem + 0.9rem + 1.6rem); height: 3px; border-radius: 3px;
  left: calc(100% / var(--n) / 2); right: calc(100% / var(--n) / 2); background: var(--line);
}
.at-fill {
  position: absolute; inset: 0 auto 0 0; border-radius: 3px; background: var(--accent);
  width: calc(var(--fill) * var(--n) / (var(--n) - 1)); transition: width 0.6s var(--motion-ease, ease);
}

.at-item { position: relative; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 0.5rem; }
.at-date {
  font: 600 0.72rem/1 var(--font-mono); letter-spacing: 0.08em; color: var(--fg-dim);
  margin-bottom: 0.9rem; transition: color 0.4s;
}
.at-node {
  width: 3.2rem; height: 3.2rem; border-radius: 999px; display: flex; align-items: center; justify-content: center;
  position: relative; z-index: 1; background: var(--bg); color: var(--fg-dim); border: 2px solid var(--line);
  transition: background 0.4s, color 0.4s, border-color 0.4s, transform 0.4s var(--motion-ease, ease);
}
.at-title { font-family: var(--font-display); font-weight: var(--w-display); font-size: 1.05rem; line-height: 1.2; margin-top: 1.1rem; }
.at-where { font-size: 0.82rem; margin-top: 0.2rem; }
.at-desc { font-size: 0.78rem; line-height: 1.4; color: var(--fg-dim); margin-top: 0.35rem; max-width: 18ch; }
.at-title, .at-where, .at-desc { opacity: 0.35; transition: opacity 0.4s; }

.at-item.lit .at-date { color: var(--accent); }
.at-item.lit .at-node { background: var(--accent); border-color: var(--accent); color: var(--on-accent); }
.at-item.lit .at-title, .at-item.lit .at-where, .at-item.lit .at-desc { opacity: 1; }
.at-item.now .at-node { transform: scale(1.15); box-shadow: 0 0 0 6px color-mix(in srgb, var(--accent) 18%, transparent); }
</style>
