<script setup>
import { onUnmounted, ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

// The areas of robotics worked on, as six icon tiles in a 3 x 2 grid that rise in one
// after another on slide enter (static in print/export).
//   <WorkAreas />
const AREAS = [
  { icon: 'lucide:scan-eye', title: 'Perception' },
  { icon: 'lucide:map', title: 'SLAM' },
  { icon: 'lucide:route', title: 'Navigation and control' },
  { icon: 'lucide:grab', title: 'Manipulation' },
  { icon: 'lucide:brain-circuit', title: 'Imitation learning' },
  { icon: 'lucide:graduation-cap', title: 'Robotics for education' },
]

const shown = ref(false)
let t = null
function play() { shown.value = false; clearTimeout(t); t = setTimeout(() => (shown.value = true), 60) }
onSlideEnter(play)
onSlideLeave(() => { clearTimeout(t) })
onUnmounted(() => clearTimeout(t))
</script>

<template>
  <div class="wa" :class="{ on: shown }">
    <div v-for="(a, i) in AREAS" :key="a.title" class="wa-tile" :style="{ transitionDelay: `${100 + i * 110}ms` }">
      <span class="wa-icon"><Icon :name="a.icon" size="1.7rem" /></span>
      <div class="wa-title">{{ a.title }}</div>
    </div>
  </div>
</template>

<style scoped>
.wa { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.2rem; margin-top: 1.2rem; }
.wa-tile {
  display: flex; flex-direction: column; align-items: flex-start; justify-content: center; min-height: 8.5rem;
  padding: 1.2rem 1.4rem; background: var(--surface-bg); border: var(--surface-border);
  border-left: 3px solid var(--accent); border-radius: var(--radius);
  opacity: 0; translate: 0 0.6rem; transition: opacity 0.45s var(--motion-ease, ease), translate 0.45s var(--motion-ease, ease);
}
.wa.on .wa-tile { opacity: 1; translate: 0 0; }
.wa-icon {
  width: 3rem; height: 3rem; border-radius: 999px; display: flex; align-items: center; justify-content: center;
  color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, transparent); margin-bottom: 0.8rem;
}
.wa-title { font-family: var(--font-display); font-weight: var(--w-display); font-size: 1.3rem; line-height: 1.2; }

@media print { .wa-tile { opacity: 1 !important; translate: 0 0 !important; } }
</style>
