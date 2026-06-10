import base64
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

# ---- Page config: wide, no default menu clutter ----
st.set_page_config(
    page_title="Claim Your HRDF — Don't Let It Go to Waste",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# ---- Remove Streamlit's default padding/header so the page is full-bleed ----
st.markdown(
    """
    <style>
      header[data-testid="stHeader"] {display:none;}
      .block-container {padding:0 !important; max-width:100% !important;}
      footer {visibility:hidden;}
      [data-testid="stToolbar"] {display:none;}
    </style>
    """,
    unsafe_allow_html=True,
)

BASE = Path(__file__).parent


def load_page() -> str:
    """Load the landing page and inline poster.png as base64 (iframes can't read local files)."""
    html = (BASE / "hrdf-landing.html").read_text(encoding="utf-8")
    poster = BASE / "poster.png"
    if poster.exists() and 'src="poster.png"' in html:
        b64 = base64.b64encode(poster.read_bytes()).decode()
        html = html.replace('src="poster.png"', f'src="data:image/png;base64,{b64}"')
    return html


# ---- Render the landing page inside a full-height component ----
components.html(load_page(), height=6600, scrolling=True)
