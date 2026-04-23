(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = prefersDark ? 'dark' : 'light';

  function setTheme(nextTheme) {
    theme = nextTheme;
    root.setAttribute('data-theme', theme);
    if (!toggle) return;
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    toggle.innerHTML =
      theme === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>';
  }

  setTheme(theme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    });
  }
})();
