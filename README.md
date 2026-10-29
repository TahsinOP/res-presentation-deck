# gehrig-talk

15-minute Slidev deck for the call with Dr Daniel Gehrig (Monday 2 November 2026, 9:00 am PST / 10:30 pm IST).
Same stack and look as the e-Yantra workshop decks: `slidev-theme-tahta`, `minimal` variant.

```bash
npm install
npm run dev        # http://localhost:3030 · presenter view at /presenter (speaker notes + timings)
npm run lint       # tahta deck linter
npm run build      # static site in dist/, base /res-presentation-deck/
npm run export     # PDF backup (videos become poster frames)
```

## Layout

- `slides.md`: the deck. Slides 1–24 are the talk; the 5 slides after Thank you are backups (not counted in the page numbers).
  Speaker notes carry the timings, the script, prepared answers (Thank-you slide) and questions to ask (Research interests slide).
- `components/Vid.vue`: silent looping clip that restarts on slide enter and pauses on leave.
  Paths are relative to `public/` and get the build base prefixed, so they work locally and on Pages.
- `components/EstimatorTick.vue`: animated 30 Hz detections → 50 Hz filter ticks with the χ² gate and covariance floor (scalar sketch, schematic).
- `components/WorkMap.vue`: animated mind map of work areas and the systems behind each (overview slide).
- `components/AboutTimeline.vue`: photo timeline for the About me slide.
- `components/Pic.vue`: still image framed like `Vid`, for photo/clip rows.
- `components/Fit.vue`, `vite.config.ts`: Fit override copied from workshop-ai (fixes clipping in PDF export).
- `components/Foot.vue`: footer override; slides with `aside: backup` are left out of the page count and labelled "Backup n".
- `public/videos`: clips trimmed from the portfolio and the transport repo's Manim animations (all under 2.5 MB).
  `public/posters`: one frame per clip, used as the poster and in the PDF.
- MuJoCo clip for slide 6: drop it at `public/videos/mujoco.mp4` (and optionally a frame at
  `public/posters/mujoco.jpg`); until then the slide shows a dashed placeholder. Compress it first:
  `ffmpeg -i in.mp4 -vf scale=-2:720 -c:v libx264 -crf 28 -an public/videos/mujoco.mp4`

## Deploy

Push to a GitHub repository named `res-presentation-deck`, set Settings → Pages → Source to **GitHub Actions**,
and `.github/workflows/deploy.yml` publishes it at https://tahsinop.github.io/res-presentation-deck/.
