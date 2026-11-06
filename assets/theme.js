// The light/dark switch. The page starts on the device's setting and a tap flips it.
// A choice that differs from the device's is remembered on this device; flipping back forgets it.
(() => {
  const root = document.documentElement;
  const device = matchMedia('(prefers-color-scheme: dark)');
  const deviceTheme = () => (device.matches ? 'dark' : 'light');
  const theme = () => root.dataset.theme || deviceTheme();

  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch {}
  if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme');
    const bars = document.querySelectorAll('meta[name="theme-color"]');
    const show = () => {
      button.setAttribute('aria-pressed', theme() === 'dark');
      // The browser's own bar takes the page's color.
      const paper = getComputedStyle(root).getPropertyValue('--paper').trim();
      bars.forEach((bar) => bar.setAttribute('content', paper));
    };
    button.addEventListener('click', () => {
      const next = theme() === 'dark' ? 'light' : 'dark';
      if (next === deviceTheme()) delete root.dataset.theme;
      else root.dataset.theme = next;
      try {
        if (root.dataset.theme) localStorage.setItem('theme', next);
        else localStorage.removeItem('theme');
      } catch {}
      show();
    });
    device.addEventListener('change', show);
    show();
    button.hidden = false;
  });
})();
