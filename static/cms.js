/* SLT Academy - applies saved wording from content.json onto the page.
   If content.json is missing or broken, the page simply keeps the text that
   is already written in index.html, so the site can never end up blank. */
(function () {
  var F = window.CMS_FIELDS || [];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function nodes(sel, root) { return (root || document).querySelectorAll(sel); }
  function pick(f, root) { var list = nodes(f.s, root); return list.length > f.i ? list[f.i] : null; }

  /* main text of an element, ignoring the trailing <em>/<span> accent */
  function mainText(el, tag) {
    var out = '';
    for (var n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3) { out += n.nodeValue; }
      else if (n.nodeType === 1 && n.tagName.toLowerCase() !== tag) { out += n.textContent; }
    }
    return out.trim();
  }
  function accent(el, tag) {
    var t = el.getElementsByTagName(tag);
    return t.length ? t[t.length - 1].textContent.trim() : '';
  }
  function lastTextNode(el) {
    for (var n = el.lastChild; n; n = n.previousSibling) {
      if (n.nodeType === 3 && n.nodeValue.trim()) { return n; }
    }
    return null;
  }

  /* read the current value(s) of a field straight from the page */
  function readField(f, out, root) {
    var el = pick(f, root); if (!el) { return; }
    switch (f.t) {
      case 'attr': out[f.k] = el.getAttribute(f.x) || ''; break;
      case 'tail': var tn = lastTextNode(el); out[f.k] = tn ? tn.nodeValue.trim() : ''; break;
      case 'link': out[f.k] = el.textContent.trim(); break;
      case 'emlast':
        out[f.k] = mainText(el, 'em'); out[f.k + '.em'] = accent(el, 'em'); break;
      case 'spanlast':
        out[f.k] = mainText(el, 'span'); out[f.k + '.span'] = accent(el, 'span'); break;
      case 'boldfirst':
        var b = el.getElementsByTagName('strong');
        out[f.k + '.b'] = b.length ? b[0].textContent.trim() : '';
        out[f.k] = mainText(el, 'strong'); break;
      default: out[f.k] = el.textContent.trim();
    }
  }

  /* write a saved value back onto the page */
  function writeField(f, data) {
    var el = pick(f); if (!el) { return; }
    var v = data[f.k];
    switch (f.t) {
      case 'attr':
        if (v != null && v !== '') { el.setAttribute(f.x, v); }
        break;
      case 'tail':
        if (v != null && v !== '') {
          var tn = lastTextNode(el);
          if (tn) { tn.nodeValue = v; } else { el.appendChild(document.createTextNode(v)); }
        }
        break;
      case 'link':
        if (v != null && v !== '') { el.textContent = v; el.setAttribute('href', (f.x || '') + v); }
        break;
      case 'emlast':
      case 'spanlast':
        var tag = f.t === 'emlast' ? 'em' : 'span';
        var acc = data[f.k + '.' + tag];
        if (v == null && acc == null) { return; }
        var m1 = v == null ? mainText(el, tag) : v;
        var a1 = acc == null ? accent(el, tag) : acc;
        el.innerHTML = esc(m1) + (a1 ? ' <' + tag + '>' + esc(a1) + '</' + tag + '>' : '');
        break;
      case 'boldfirst':
        var bold = data[f.k + '.b'];
        if (v == null && bold == null) { return; }
        var b2 = bold == null ? (el.getElementsByTagName('strong')[0] || {}).textContent || '' : bold;
        var r2 = v == null ? mainText(el, 'strong') : v;
        el.innerHTML = (b2 ? '<strong>' + esc(b2) + '</strong> ' : '') + esc(r2);
        break;
      default:
        if (v != null && v !== '') { el.textContent = v; }
    }
  }

  window.CMS = {
    extract: function (root) { var o = {}; F.forEach(function (f) { readField(f, o, root); }); return o; },
    apply: function (data) { if (data) { F.forEach(function (f) { writeField(f, data); }); } }
  };

  /* load saved wording; ignore failures so the built-in text stays */
  try {
    fetch('content.json?v=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { window.CMS.apply(d); })
      .catch(function () { });
  } catch (e) { }
})();
