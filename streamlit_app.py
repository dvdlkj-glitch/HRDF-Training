"""SLT Academy - Team Transformation landing page (served via Streamlit)."""
import hashlib
import pathlib
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="SLT Academy - Transforming Teams into High-Performing Forces",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Hide Streamlit's own chrome and make the embedded page full-bleed / full-height.
st.markdown(
    """
    <style>
      #MainMenu, header, footer {visibility:hidden;}
      [data-testid="stHeader"], [data-testid="stToolbar"] {display:none;}
      [data-testid="stAppViewContainer"] {background:#eef1f6;}
      .block-container, [data-testid="stMainBlockContainer"] {
          padding:0 !important; margin:0 !important; max-width:100% !important;
      }
      [data-testid="stVerticalBlock"], [data-testid="stElementContainer"] {gap:0 !important;}
      iframe {height:100vh !important; width:100vw !important; border:none; display:block;}
    </style>
    """,
    unsafe_allow_html=True,
)

# index.html and its media live in static/ and are served at the URL path app/static/
# (this requires enableStaticServing = true in .streamlit/config.toml)
#
# Cache-bust: version the iframe URL with a hash of index.html so each deploy
# serves the newest page instead of a stale browser/CDN copy of the same URL.
try:
    _ver = hashlib.md5(pathlib.Path("static/index.html").read_bytes()).hexdigest()[:10]
except Exception:
    _ver = "0"

components.iframe(f"app/static/index.html?v={_ver}", height=900, scrolling=True)
