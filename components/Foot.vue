<script setup>
import { computed, unref } from 'vue'
import { useSlideContext } from '@slidev/client'
// Deck override of the theme's Foot: slides marked `aside: backup` sit after the closing
// slide for questions only, so they are left out of the page count ("07 / 23") and are
// labelled "Backup 1", "Backup 2", ... instead of a page number.
const props = defineProps({ mark: { type: Boolean, default: true } })
const { $frontmatter, $page, $nav, $slidev } = useSlideContext()
const pad = (n) => String(n ?? '').padStart(2, '0')
const strip = (s) => String(s ?? '').replace(/<[^>]*>/g, '')
const left = () => strip($frontmatter.foot ?? $slidev?.configs?.title ?? '')
const showMark = computed(() => props.mark && $frontmatter.mark !== false)

// $nav and $page are refs in script (the template unwraps them automatically).
const nav = computed(() => unref($nav))
const page = computed(() => unref($page))
const isBackup = (fm) => fm?.aside === 'backup'
const firstBackup = computed(() => {
  const slides = unref(nav.value?.slides) ?? []
  const i = slides.findIndex(s => isBackup(s?.meta?.slide?.frontmatter))
  return i < 0 ? null : i + 1
})
const mainTotal = computed(() => (firstBackup.value ? firstBackup.value - 1 : unref(nav.value?.total)))
const backupNo = computed(() => (isBackup($frontmatter) && firstBackup.value ? page.value - firstBackup.value + 1 : null))
</script>

<template>
  <div class="foot">
    <span class="foot-left"><BrandLogo v-if="showMark" mode="mark" />{{ left() }}</span>
    <span v-if="backupNo"><span class="pg">Backup {{ backupNo }}</span></span>
    <span v-else><span class="pg">{{ pad($page) }}</span> / {{ pad(mainTotal) }}</span>
  </div>
</template>
