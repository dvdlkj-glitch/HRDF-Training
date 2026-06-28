"""SLT Academy - Destress Team Building landing page (served via Streamlit)."""
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="SLT Academy - Destress Team Building",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Hide Streamlit's own chrome and make the embedded page full-bleed / full-height.
st.markdown(
    """
    <style>
      #MainMenu, header, footer {visibility:hidden;}
      [data-testid="stHeader"], [data-testid="stToolbar"] {display:none;}
      [data-testid="stAppViewContainer"] {background:#0a0e12;}
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
components.iframe("app/static/index.html", height=900, scrolling=True)