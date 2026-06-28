# SLT Academy — Destress Team Building (Streamlit)

A cinematic, full-screen landing page (background videos, horizontal sliding photo
marquee, scroll animations) served through Streamlit.

The whole page lives in `static/index.html`. `streamlit_app.py` embeds it full-screen
in an iframe, and the media is served by Streamlit's static file server.

## Folder structure

```
deploy/
├── streamlit_app.py        # entry point — embeds the page
├── requirements.txt
├── README.md
├── .streamlit/
│   └── config.toml         # enables static file serving
└── static/
    ├── index.html          # the full landing page
    ├── videos/   clip1.mp4 … clip4.mp4
    ├── photos/   photo1.jpg … photo3.jpg   (web-optimised)
    └── posters/  clip1.jpg … clip4.jpg     (video poster frames)
```

## Run locally

```powershell
cd "C:\Users\user\Downloads\STL Acadamy team building web page\deploy"
streamlit run streamlit_app.py
```

Then open http://localhost:8501 — check the hero video and the sliding photo marquee.

## Deploy to Streamlit Community Cloud

1. Create a GitHub repo and push the **contents** of this `deploy/` folder to the repo
   root (so `streamlit_app.py`, `requirements.txt`, `.streamlit/`, and `static/` sit at
   the top level).
2. Go to https://share.streamlit.io → **New app**.
3. Pick the repo and branch, set **Main file path** to `streamlit_app.py`, then **Deploy**.

## How it works

- `.streamlit/config.toml` sets `enableStaticServing = true`, which exposes everything in
  `static/` at the URL path `app/static/...`.
- `streamlit_app.py` calls `components.iframe("app/static/index.html", ...)` and hides
  Streamlit's default chrome so the page fills the screen.
- All asset paths inside `index.html` are relative (`videos/…`, `photos/…`, `posters/…`),
  so they resolve correctly under `app/static/`.

## Tweaks

- **Embed height:** change `height=900` in `streamlit_app.py`.
- **Marquee speed:** in `static/index.html`, edit `slideX 42s` (smaller = faster).
- **Contact details:** the proposal email is set to `dvdlkj@gmail.com`. To add a WhatsApp
  CTA, drop a `Chat on WhatsApp` ghost button back into `#enquire` and the footer pointing at
  `https://wa.me/<international-number>`. The testimonial section was removed pending a real,
  approved quote — re-add a `section.block.testi` block when you have one.

## Design

The page was redesigned using the [taste-skill](https://github.com/leonxlnx/taste-skill)
"anti-slop" frontend rules (redesign / overhaul mode). Display type is **Bricolage
Grotesque** (the previous Fraunces serif was removed as a flagged AI tell), body is
**Manrope**, with a single locked amber accent on a warm off-black theme. The previous
version is kept at `static/index.original.html` if you want to compare or revert.

## Re-syncing after editing the source page

If you edit the working copy at
`...\STL Acadamy team building web page\index.html`, copy it back into `static/` and
re-point the asset paths + re-optimise the photos. Easiest: re-run the build steps you
used originally (copy media → rewrite paths → compress photos).
