import { defineConfig } from 'vite'

// components/Fit.vue overrides the theme's Fit (copied from the workshop-ai decks, where it
// fixes clipping in PDF export), and components/Foot.vue overrides its footer so backup
// slides stay out of the page count. Each pair shares a name and the component plugin keeps
// whichever it finds first, so drop the theme's copies.
export default defineConfig({
  slidev: {
    components: {
      globsExclude: [
        '**/slidev-theme-tahta/components/Fit.vue',
        '**/slidev-theme-tahta/components/Foot.vue',
      ],
    },
  },
})
