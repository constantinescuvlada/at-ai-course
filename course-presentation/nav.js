// Per-slide navigation shared across all slide pages.
(function () {
  var b = document.body;
  var prev = b.dataset.prev, next = b.dataset.next;
  var first = b.dataset.first, last = b.dataset.last;
  var idx = +b.dataset.index, total = +b.dataset.total;

  var count = document.getElementById('count');
  var prog = document.getElementById('prog');
  if (count) count.textContent = idx + ' / ' + total;
  if (prog) prog.style.width = (total > 1 ? (idx - 1) / (total - 1) * 100 : 0) + '%';

  // keep the highlighted step visible in the sidebar
  var active = document.querySelector('.sb-link.active');
  if (active && active.scrollIntoView) active.scrollIntoView({ block: 'center' });

  function go(url) { if (url) window.location.href = url; }

  var pb = document.getElementById('prev'), nb = document.getElementById('next');
  if (pb) { pb.onclick = function () { go(prev); }; if (!prev) pb.classList.add('disabled'); }
  if (nb) { nb.onclick = function () { go(next); }; if (!next) nb.classList.add('disabled'); }

  // language switcher (EN / RU / RO) — injected on every page
  var path = location.pathname.replace(/\\/g, '/');
  var m = path.match(/\/(ru|ro)\/[^\/]*$/);
  var cur = m ? m[1] : 'en';
  var file = path.split('/').pop() || 'index.html';
  function langHref(code) {
    if (code === 'en') return '../' + file;
    return (cur === 'en' ? '' : '../') + code + '/' + file;
  }
  var sw = document.createElement('div');
  sw.className = 'lang-switch';
  [['en', 'EN'], ['ro', 'RO'], ['ru', 'RU']].forEach(function (l) {
    var a = document.createElement('a');
    a.textContent = l[1];
    if (l[0] === cur) { a.className = 'on'; }
    else { a.href = langHref(l[0]); }
    sw.appendChild(a);
  });
  document.body.appendChild(sw);

  document.addEventListener('keydown', function (e) {
    var k = e.key;
    if (k === 'ArrowRight' || k === ' ' || k === 'PageDown') { go(next); e.preventDefault(); }
    else if (k === 'ArrowLeft' || k === 'PageUp') { go(prev); }
    else if (k === 'Home') { go(first); }
    else if (k === 'End') { go(last); }
    else if (k.toLowerCase() === 'f') {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    }
  });
})();
