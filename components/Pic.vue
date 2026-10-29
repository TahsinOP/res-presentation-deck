<script setup>
import { computed } from 'vue'

// Still image framed like <Vid>, so photos and clips line up in a row.
//   <Pic src="img/lidar-sim.jpg" caption="Simulation" height="11rem" />
// `src` is relative to public/ and is prefixed with the build base.
const props = defineProps({
  src: { type: String, required: true },
  caption: { type: String, default: '' },
  height: { type: String, default: '20rem' },
  fit: { type: String, default: 'cover' },
})

const url = computed(() => import.meta.env.BASE_URL + props.src.replace(/^\//, ''))
</script>

<template>
  <figure class="pic">
    <img :src="url" :alt="caption" :style="{ height, objectFit: fit }" />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.pic { margin: 0; display: flex; flex-direction: column; gap: 0.4rem; }
.pic img {
  width: 100%; background: var(--surface-bg);
  border: var(--surface-border); border-radius: var(--radius);
}
.pic figcaption { font-size: 0.72rem; color: var(--fg-dim); letter-spacing: 0.02em; }
</style>
