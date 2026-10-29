<script setup>
import { onUnmounted, ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

// Overview of the areas worked in, as a small mind map: a centre node with six branches,
// three on each side, each listing the systems worked with (not the projects).
// Branches draw in one after another on slide enter (static in print/export).
//   <WorkMap />
const AREAS = [
  { title: 'Perception', items: ['Raspberry Pi camera car', 'RealSense wrist cameras'] },
  { title: 'SLAM', items: ['Handheld RealSense + Jetson Orin NX', 'X500 quadrotor with 3D LiDAR'] },
  { title: 'Estimation and control', items: ['Two SO-101 mobile manipulators', 'Ackermann field vehicle'] },
  { title: 'Navigation', items: ['Electric campus shuttle', 'Ackermann field vehicle', 'Quadruped (MuJoCo)'] },
  { title: 'Learning for manipulation', items: ['Bimanual SO-101 arms, sim and real', 'UR5 with RG2 gripper'] },
  { title: 'Robotics education', items: ['Remote UR5 and mobile-robot lab', 'Low-cost autonomous car kit'] },
]
// Left column: 0, 1, 2 · right column: 3, 4, 5 · rows at 14 %, 50 %, 86 % of the height.
const ROW = [14, 50, 86]
const place = i => ({ side: i < 3 ? 'l' : 'r', y: ROW[i % 3] })

const shown = ref(false)
let t = null
function play() { shown.value = false; clearTimeout(t); t = setTimeout(() => (shown.value = true), 60) }
onSlideEnter(play)
onSlideLeave(() => { clearTimeout(t) })
onUnmounted(() => clearTimeout(t))
</script>

<template>
  <div class="wm" :class="{ on: shown }">
    <svg class="wm-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <line
        v-for="(a, i) in AREAS" :key="'l' + i"
        x1="50" y1="50" :x2="place(i).side === 'l' ? 33 : 67" :y2="place(i).y"
        :style="{ transitionDelay: `${150 + i * 140}ms` }"
      />
    </svg>

    <div class="wm-centre">
      <span>Areas of my work</span>
    </div>

    <div
      v-for="(a, i) in AREAS" :key="a.title"
      class="wm-node" :class="place(i).side"
      :style="{ top: `${place(i).y}%`, transitionDelay: `${250 + i * 140}ms` }"
    >
      <div class="wm-title">{{ a.title }}</div>
      <ul>
        <li v-for="it in a.items" :key="it">{{ it }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.wm { position: relative; width: 100%; height: 23rem; margin-top: 0.25rem; }
.wm-lines { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.wm-lines line {
  stroke: var(--accent); stroke-width: 1.2; vector-effect: non-scaling-stroke; opacity: 0;
  transition: opacity 0.5s var(--motion-ease, ease);
}
.wm.on .wm-lines line { opacity: 0.55; }

.wm-centre {
  position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
  width: 8.5rem; height: 8.5rem; border-radius: 999px; display: flex; align-items: center; justify-content: center;
  text-align: center; padding: 1rem; background: var(--accent); color: var(--on-accent);
  font-weight: var(--w-strong); font-size: 0.95rem; line-height: 1.25; z-index: 1;
}

.wm-node {
  position: absolute; width: 33%; transform: translateY(-50%); padding: 0.45rem 0.8rem;
  background: var(--surface-bg); border: var(--surface-border); border-radius: var(--radius);
  opacity: 0; transition: opacity 0.5s var(--motion-ease, ease), translate 0.5s var(--motion-ease, ease);
}
.wm-node.l { left: 0; translate: -0.6rem 0; }
.wm-node.r { right: 0; translate: 0.6rem 0; }
.wm.on .wm-node { opacity: 1; translate: 0 0; }
.wm-node.l { border-right: 3px solid var(--accent); }
.wm-node.r { border-left: 3px solid var(--accent); }

.wm-title { font-weight: var(--w-strong); font-size: 0.92rem; margin-bottom: 0.35rem; }
.wm-node.l .wm-title { text-align: right; }
.wm-node ul { margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 0.3rem; }
.wm-node.l ul { justify-content: flex-end; }
.wm-node li {
  font-size: 0.72rem; line-height: 1.3; color: var(--fg); padding: 0.12rem 0.5rem;
  border: 1px solid var(--line); border-radius: 999px; margin: 0;
}
.wm-node li::before { display: none; }

@media print { .wm-node, .wm-lines line { opacity: 1 !important; translate: 0 0 !important; } }
</style>
