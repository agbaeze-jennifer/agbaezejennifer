(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  $('#yr').textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     PROJECTS: EDIT THIS LIST as you build.
     The FIRST one becomes the wide featured card.
     kind   = small label above the title
     status = 'Live' | 'In progress' | 'Coming soon'
     focus  = one line on what the project shows
     img    = screenshot path (put images in assets/projects/).
              If the file doesn't exist, the card shows a mock-up.
     live   = link to the live site ('' hides the button)
     code   = link to the GitHub repo ('' hides the button)
     cat    = 'web' | 'ai' | 'creative' (for the filter buttons)
  --------------------------------------------------------- */
  var projects = [
    {
      t: 'Portfolio Website',
      kind: 'Website: this site',
      status: 'Live',
      d: 'The site you are on. A scroll-driven portfolio with a cutout hero, motion and a working contact form.',
      focus: 'Responsive layout, scroll animation and a working contact form, all coded by hand.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      cls: 't1', cat: 'web', img: 'assets/projects/portfolio.png', live: 'https://agbaezejennifer.vercel.app/', code: 'https://github.com/agbaeze-jennifer'
    },
    {
      t: 'Full-Stack Website',
      kind: 'Full-stack website',
      status: 'In progress',
      d: 'A complete website with a front end, a back end and a database, built end to end.',
      focus: 'How the pieces connect: the interface, the server logic and the data behind it.',
      tags: ['Next.js', 'Back end', 'Database'],
      cls: 't2', cat: 'web', img: 'assets/projects/fullstack.png', live: '', code: ''
    },
    {
      t: 'AI Tool',
      kind: 'AI tool',
      status: 'In progress',
      d: 'A small tool that uses AI to solve one clear, everyday problem, with an interface anyone can use.',
      focus: 'Connecting a web interface to an AI model and turning its answer into something useful.',
      tags: ['JavaScript', 'AI API', 'Web'],
      cls: 't3', cat: 'ai', img: 'assets/projects/ai-tool.png', live: '', code: ''
    },
    {
      t: 'Motion Lab',
      kind: 'Creative experiment',
      status: 'Coming soon',
      d: 'A playground for scroll, hover and cursor-driven animation ideas.',
      focus: 'Testing how motion can guide attention without getting in the way.',
      tags: ['CSS', 'JavaScript', 'Canvas'],
      cls: 't4', cat: 'creative', img: 'assets/projects/motion-lab.png', live: '', code: ''
    },
    {
      t: 'Interface Remix',
      kind: 'Creative experiment',
      status: 'Coming soon',
      d: 'A bold redesign of a familiar interface, like a music player or weather card, with an unexpected layout and motion.',
      focus: 'Taking a design from Canva to a working, animated page.',
      tags: ['HTML', 'CSS', 'Canva'],
      cls: 't5', cat: 'creative', img: 'assets/projects/interface-remix.png', live: '', code: ''
    }
  ];

  var filterList = [
    { k: 'all', l: 'All' },
    { k: 'web', l: 'Websites' },
    { k: 'ai', l: 'AI' },
    { k: 'creative', l: 'Creative' }
  ];

  var grid = $('#projGrid');

  grid.innerHTML = projects.map(function (p, i) {
    var btns = '';
    if (p.live) btns += '<a class="btn btn-grad" href="' + p.live + '" target="_blank" rel="noopener">View project</a>';
    if (p.code) btns += '<a class="btn btn-ghost" href="' + p.code + '" target="_blank" rel="noopener">Code</a>';
    var actions = btns ? '<div class="proj-actions">' + btns + '</div>' : '';
    var shot = p.img
      ? '<img class="shot" src="' + p.img + '" alt="Screenshot of ' + p.t + '" loading="lazy" onerror="this.remove()">'
      : '';
    var status = p.status
      ? '<span class="status' + (p.status === 'Live' ? ' is-live' : '') + '">' + p.status + '</span>'
      : '';
    return '<article class="proj rv' + (i === 0 ? ' feat' : '') + '" data-cat="' + p.cat + '" style="--d:' + (i % 2 * 0.08) + 's">' +
      '<div class="thumb ' + p.cls + '"><div class="mock"><b></b><div><i></i><i></i><i></i></div></div>' + shot + '</div>' +
      '<div class="proj-body">' +
        '<div class="proj-top"><span class="kind">' + p.kind + '</span>' + status + '</div>' +
        '<h3>' + p.t + '</h3>' +
        '<p>' + p.d + '</p>' +
        '<p class="proj-did"><b>What it shows:</b> ' + p.focus + '</p>' +
        '<div class="tags">' + p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
        actions +
      '</div></article>';
  }).join('');

  /* ---- project filters ---- */
  var fWrap = $('#filters');
  fWrap.innerHTML = filterList.map(function (f, i) {
    return '<button type="button" data-f="' + f.k + '" aria-pressed="' + (i === 0) + '"' + (i === 0 ? ' class="on"' : '') + '>' + f.l + '</button>';
  }).join('');

  fWrap.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    var key = b.getAttribute('data-f');
    $$('button', fWrap).forEach(function (x) {
      var on = x === b;
      x.classList.toggle('on', on);
      x.setAttribute('aria-pressed', on);
    });
    $$('.proj', grid).forEach(function (c) {
      c.hidden = !(key === 'all' || c.getAttribute('data-cat') === key);
    });
  });

  /* ---- mobile menu ---- */
  var nav = $('#nav'), mb = $('#menuBtn');

  function setMenu(open) {
    nav.classList.toggle('open', open);
    mb.setAttribute('aria-expanded', open);
    mb.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  mb.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  $$('#pillNav a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target)) setMenu(false);
  });

  /* ---- typing role ---- */
  var roleEl = $('#role');
  var roles = ['Web Developer', 'Aspiring Creative Technologist', 'Computer Science Student', 'Interface Builder'];

  if (reduce) {
    roleEl.textContent = roles[0];
  } else {
    var ri = 0, ci = 0, del = false;
    (function type() {
      var w = roles[ri];
      roleEl.textContent = w.slice(0, ci);
      if (!del && ci === w.length) { del = true; return setTimeout(type, 1700); }
      if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; return setTimeout(type, 350); }
      ci += del ? -1 : 1;
      setTimeout(type, del ? 35 : 75);
    })();
  }

  /* ---- marquee: duplicate the content so the loop is seamless ---- */
  var track = $('#track');
  if (track) {
    Array.prototype.slice.call(track.children).forEach(function (c) {
      track.appendChild(c.cloneNode(true));
    });
  }

  /* ---- hero particles ---- */
  var cv = $('#fx');
  if (cv && !reduce) {
    var ctx = cv.getContext('2d');
    var W = 0, H = 0, pts = [], running = false, onScreen = true, raf = 0;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    var size = function () {
      var ow = W, oh = H;
      W = cv.offsetWidth; H = cv.offsetHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (ow && oh) pts.forEach(function (p) { p.x *= W / ow; p.y *= H / oh; });
    };

    size();
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(size, 120); });

    var n = W < 700 ? 35 : 70;
    for (var i = 0; i < n; i++) {
      pts.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.8 + .4,
        vx: (Math.random() - .5) * .25,
        vy: -Math.random() * .35 - .05,
        a: Math.random() * .6 + .2
      });
    }

    var draw = function () {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      pts.forEach(function (p) {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
        if (p.x < -5) p.x = W + 5;
        if (p.x > W + 5) p.x = -5;
        ctx.fillStyle = 'rgba(100,140,255,' + (p.a * .16) + ')';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3.4, 0, 6.283); ctx.fill();
        ctx.fillStyle = 'rgba(170,196,255,' + p.a + ')';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    var start = function () { if (!running) { running = true; raf = requestAnimationFrame(draw); } };
    var stop = function () { running = false; cancelAnimationFrame(raf); };

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) {
        onScreen = e[0].isIntersecting;
        if (onScreen && !document.hidden) start(); else stop();
      }).observe(cv);
    }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden || !onScreen) stop(); else start();
    });
    start();
  }

  /* ---- subtle hero photo movement ---- */
  var hero = $('#home'), pw = $('#photoWrap');

  if (!reduce && window.matchMedia('(hover:hover)').matches) {
    hero.addEventListener('mousemove', function (e) {
      pw.style.setProperty('--px', ((e.clientX / innerWidth - .5) * -6) + 'px');
      pw.style.setProperty('--py', ((e.clientY / innerHeight - .5) * -4) + 'px');
    });
    hero.addEventListener('mouseleave', function () {
      pw.style.setProperty('--px', '0px');
      pw.style.setProperty('--py', '0px');
    });
  }

  /* ---- reveal on scroll ---- */
  var rvEls = $$('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    rvEls.forEach(function (el) { io.observe(el); });
  } else {
    rvEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- statement: words fill in as you scroll ---- */
  var st = $('#statement');
  var stText = st.textContent.trim();
  st.setAttribute('aria-label', stText);
  st.innerHTML = stText.split(/\s+/).map(function (w) {
    return '<span class="w" aria-hidden="true">' + w + '</span>';
  }).join(' ');
  var wEls = $$('.w', st);

  /* ---- timeline ---- */
  var tl = $('#timeline'), tfill = $('#tfill'), steps = $$('.step', tl);

  /* ---- scroll handler (one rAF-throttled loop) ---- */
  var secs = ['home', 'about', 'skills', 'projects', 'process', 'contact']
    .map(function (id) { return document.getElementById(id); });
  var links = $$('[data-s]');
  var bar = $('#progress'), toTop = $('#toTop');
  var ticking = false;

  function update() {
    ticking = false;
    var vh = innerHeight;
    var y = window.pageYOffset;
    var max = document.documentElement.scrollHeight - vh;

    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    nav.classList.toggle('scrolled', y > 40);
    toTop.classList.toggle('show', y > vh * .8);

    var cur = 'home';
    secs.forEach(function (s) { if (s.getBoundingClientRect().top <= vh * .4) cur = s.id; });
    if (max > 0 && y >= max - 4) cur = 'contact';
    links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-s') === cur); });

    var r = st.getBoundingClientRect();
    var p = Math.min(1, Math.max(0, (vh * .85 - r.top) / (r.height + vh * .35)));
    var upto = Math.round(p * wEls.length * 1.15);
    wEls.forEach(function (w, i) { w.classList.toggle('on', i < upto); });

    var tr = tl.getBoundingClientRect();
    var tp = Math.min(1, Math.max(0, (vh * .6 - tr.top) / tr.height));
    tfill.style.height = (tp * (tr.height - 16)) + 'px';
    steps.forEach(function (s) {
      s.classList.toggle('on', s.getBoundingClientRect().top < vh * .62);
    });
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();

  /* ---- spotlight on cards ---- */
  $$('.skill,.proj').forEach(function (c) {
    c.addEventListener('mousemove', function (e) {
      var b = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - b.left) + 'px');
      c.style.setProperty('--my', (e.clientY - b.top) + 'px');
    });
  });

  /* ---- contact form (Web3Forms) ---- */
  var form = $('#form'), note = $('#note');

  if (form) {
    var fields = [$('#fName'), $('#fEmail'), $('#fMsg')];

    var say = function (msg, type) {
      note.textContent = msg;
      note.className = 'note' + (type ? ' ' + type : '');
    };

    fields.forEach(function (f) {
      f.addEventListener('input', function () { f.removeAttribute('aria-invalid'); });
    });

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      var name = fields[0].value.trim();
      var email = fields[1].value.trim();
      var msg = fields[2].value.trim();
      var okEmail = /^\S+@\S+\.\S+$/.test(email);

      fields[0].setAttribute('aria-invalid', !name);
      fields[1].setAttribute('aria-invalid', !okEmail);
      fields[2].setAttribute('aria-invalid', !msg);

      if (!name || !okEmail || !msg) {
        say('Please enter your name, a valid email and a message.', 'err');
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      say('Sending your message...');

      try {
        var response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        var result = await response.json();

        if (result.success) {
          form.reset();
          fields.forEach(function (f) { f.removeAttribute('aria-invalid'); });
          say('Message sent successfully. Thank you!', 'ok');
        } else {
          say(result.message || 'Something went wrong. Please try again.', 'err');
        }
      } catch (err) {
        say('Unable to send the message right now. Please try again.', 'err');
      } finally {
        btn.disabled = false;
        btn.textContent = 'Send message';
      }
    });
  }
})();