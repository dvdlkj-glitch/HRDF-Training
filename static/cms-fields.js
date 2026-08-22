/* SLT Academy - editable text map.
   Shared by the website (cms.js) and the editor (admin.html).
   Text only: no videos, no photos, no layout. */
(function () {
  var F = [];
  // k=key  g=group  l=label  s=selector  t=type  i=index  x=extra
  function add(k, g, l, s, t, i, x) {
    F.push({ k: k, g: g, l: l, s: s, t: t || 'text', i: i || 0, x: x || null });
  }
  function each(n, fn) { for (var i = 0; i < n; i++) { fn(i); } }

  /* HERO */
  add('hero.kicker', 'Hero (top of page)', 'Small line above the headline', '.kicker', 'text');
  add('hero.line1', 'Hero (top of page)', 'Headline - line 1', '.hero h1 .l1', 'text');
  add('hero.line2', 'Hero (top of page)', 'Headline - line 2 (italic)', '.hero h1 .l2 em', 'text');
  add('hero.lede', 'Hero (top of page)', 'Paragraph under the headline', '.hero p.lede', 'text');
  add('hero.btn1', 'Hero (top of page)', 'Orange button label', '.hero-cta .btn-amber', 'tail');
  add('hero.btn2', 'Hero (top of page)', 'Outline button label', '.hero-cta .btn-ghost', 'tail');

  /* HERO STATS */
  add('stat.n1', 'Hero statistics', 'Stat 1 - number', '.trust>div:nth-child(1) .count', 'attr', 0, 'data-to');
  add('stat.l1', 'Hero statistics', 'Stat 1 - label', '.trust>div:nth-child(1)>span', 'text');
  add('stat.n2', 'Hero statistics', 'Stat 2 - number', '.trust>div:nth-child(2) .count', 'attr', 0, 'data-to');
  add('stat.l2', 'Hero statistics', 'Stat 2 - label', '.trust>div:nth-child(2)>span', 'text');
  add('stat.n3', 'Hero statistics', 'Stat 3 - number', '.trust>div:nth-child(3)>b', 'text');
  add('stat.l3', 'Hero statistics', 'Stat 3 - label', '.trust>div:nth-child(3)>span', 'text');

  /* SHOWREEL */
  add('sr.eb', 'Showreel', 'Small label', '#showreel .eyebrow', 'text');
  add('sr.h2', 'Showreel', 'Heading', '#showreel .h2', 'emlast');
  add('sr.sub', 'Showreel', 'Paragraph', '#showreel .sub', 'text');

  /* EXPERIENCES */
  add('ex.eb', 'Experiences', 'Small label', '#themes .eyebrow', 'text');
  add('ex.h2', 'Experiences', 'Heading', '#themes .h2', 'emlast');
  each(4, function (i) {
    add('ex.t' + i, 'Experiences', 'Card ' + (i + 1) + ' - title', '.exp h3', 'text', i);
    add('ex.d' + i, 'Experiences', 'Card ' + (i + 1) + ' - description', '.exp p', 'text', i);
    add('ex.g' + i, 'Experiences', 'Card ' + (i + 1) + ' - tag', '.exp .tag', 'text', i);
  });

  /* VIDEO BAND */
  add('cine.h2', 'Video band', 'Heading', '.reel-cinema h2', 'emlast');
  add('cine.sub', 'Video band', 'Line under heading', '.reel-cinema .cine-sub', 'text');

  /* WHO WE ARE */
  add('why.eb', 'Who we are', 'Small label', '#why .eyebrow', 'text');
  add('why.h2', 'Who we are', 'Heading', '#why .h2', 'emlast');
  each(3, function (i) {
    add('why.t' + i, 'Who we are', 'Point ' + (i + 1) + ' - title', '.why-list h4', 'text', i);
    add('why.d' + i, 'Who we are', 'Point ' + (i + 1) + ' - text', '.why-list p', 'text', i);
  });

  /* HRD CORP CLAIMABLE */
  add('cert.eb', 'HRD Corp claimable', 'Small label', '#certification .eyebrow', 'text');
  add('cert.h', 'HRD Corp claimable', 'Big heading', '.cert-h', 'spanlast');
  add('cert.lead', 'HRD Corp claimable', 'Paragraph', '.cert-lead', 'boldfirst');
  add('cert.fine', 'HRD Corp claimable', 'Small print', '.cert-fine', 'text');

  /* ADVANTAGES */
  add('adv.eb', 'Advantages', 'Small label', '#advantages .eyebrow', 'text');
  add('adv.h2', 'Advantages', 'Heading', '#advantages .h2', 'emlast');
  each(4, function (i) {
    add('adv.t' + i, 'Advantages', 'Card ' + (i + 1) + ' - title', '.adv-card h3', 'text', i);
    add('adv.d' + i, 'Advantages', 'Card ' + (i + 1) + ' - text', '.adv-card p', 'text', i);
  });

  /* THE CHALLENGE */
  add('re.eb', 'The challenge', 'Small label', '#reality .eyebrow', 'text');
  add('re.h2', 'The challenge', 'Heading', '#reality .h2', 'emlast');
  each(4, function (i) {
    add('re.p' + i, 'The challenge', 'Point ' + (i + 1), '.reality-item p', 'boldfirst', i);
  });
  add('re.note', 'The challenge', 'Closing line', '.reality-note', 'text');

  /* OUR APPROACH */
  add('pr.eb', 'Our approach', 'Small label', '#proven .eyebrow', 'text');
  add('pr.h2', 'Our approach', 'Heading', '#proven .h2', 'emlast');
  add('pr.sub0', 'Our approach', 'Paragraph 1', '#proven .sub', 'text', 0);
  add('pr.sub1', 'Our approach', 'Paragraph 2', '#proven .sub', 'text', 1);
  each(4, function (i) {
    add('pr.t' + i, 'Our approach', 'Stage ' + (i + 1) + ' - title', '.proc-stage h3', 'text', i);
    add('pr.d' + i, 'Our approach', 'Stage ' + (i + 1) + ' - text', '.proc-stage p', 'text', i);
  });

  /* GALLERY + SOCIAL */
  add('ga.eb', 'Gallery', 'Small label', '#gallery .eyebrow', 'text');
  add('ga.h2', 'Gallery', 'Heading', '#gallery .h2', 'emlast');
  add('ga.sub', 'Gallery', 'Paragraph', '#gallery .sub', 'text');
  add('so.eb', 'Social section', 'Small label', '#social .eyebrow', 'text');
  add('so.h2', 'Social section', 'Heading', '#social .h2', 'emlast');
  add('so.sub', 'Social section', 'Paragraph', '#social .sub', 'text');

  /* HOW IT WORKS */
  add('hw.eb', 'How it works', 'Small label', '#how .eyebrow', 'text');
  add('hw.h2', 'How it works', 'Heading', '#how .h2', 'emlast');
  each(4, function (i) {
    add('hw.t' + i, 'How it works', 'Step ' + (i + 1) + ' - title', '.step h3', 'text', i);
    add('hw.d' + i, 'How it works', 'Step ' + (i + 1) + ' - text', '.step p', 'text', i);
  });

  /* TESTIMONIALS */
  add('ts.eb', 'Testimonials', 'Small label', '#testimonials .eyebrow', 'text');
  add('ts.h2', 'Testimonials', 'Heading', '#testimonials .h2', 'emlast');
  each(3, function (i) {
    add('ts.q' + i, 'Testimonials', 'Quote ' + (i + 1), '.tm-quote', 'text', i);
    add('ts.n' + i, 'Testimonials', 'Quote ' + (i + 1) + ' - name', '.tm-cite b', 'text', i);
    add('ts.r' + i, 'Testimonials', 'Quote ' + (i + 1) + ' - company', '.tm-cite small', 'text', i);
  });

  /* TRUSTED BY */
  add('tb.eb', 'Trusted by', 'Small label', '#trusted .eyebrow', 'text');
  add('tb.h2', 'Trusted by', 'Heading', '#trusted .h2', 'emlast');
  add('tb.sub', 'Trusted by', 'Paragraph', '.trusted-sub', 'text');
  add('tb.stat', 'Trusted by', 'Numbers line', '.trusted-stat', 'text');
  add('tb.band', 'Trusted by', 'Blue bar text', '.trusted-band', 'text');

  /* FINAL CALL TO ACTION */
  add('cta.eb', 'Final call to action', 'Small label', '#enquire .eyebrow', 'text');
  add('cta.h2', 'Final call to action', 'Heading', '#enquire h2', 'emlast');
  add('cta.p', 'Final call to action', 'Paragraph', '#enquire p', 'text');
  add('cta.b1', 'Final call to action', 'Orange button label', '#enquire .btn-amber', 'tail');
  add('cta.b2', 'Final call to action', 'Phone button label', '#enquire .btn-ghost', 'tail');

  /* FOOTER / CONTACT */
  add('ft.copy', 'Footer', 'Copyright line (after the year)', '.f-copy', 'text');
  add('ft.addr', 'Footer', 'Address', '.f-addr', 'text');
  add('ft.phone', 'Footer', 'Phone number', '.f-phone', 'text');
  add('ft.email', 'Footer', 'Email address', '.f-email', 'link', 0, 'mailto:');

  window.CMS_FIELDS = F;
})();
