// Content, navigation and project disclosures work without JavaScript.
(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;

  try {
    preference = localStorage.getItem('portfolio-theme');
    // Preserve the preference used by earlier portfolio versions.
    if (!preference && localStorage.getItem('darkMode') === 'enabled') preference = 'dark';
  } catch {
    /* Storage may be unavailable; the toggle still works for this visit. */
  }

  if (preference === 'light' || preference === 'dark') root.dataset.theme = preference;

  function updateToggle() {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : systemTheme.matches;
    toggle.setAttribute('aria-pressed', String(dark));
  }

  if (toggle) {
    toggle.hidden = false;
    updateToggle();
    toggle.addEventListener('click', () => {
      const dark = toggle.getAttribute('aria-pressed') === 'true';
      root.dataset.theme = dark ? 'light' : 'dark';
      try {
        localStorage.setItem('portfolio-theme', root.dataset.theme);
      } catch {
        /* Optional persistence. */
      }
      updateToggle();
    });
    systemTheme.addEventListener('change', updateToggle);
  }

  // Open a disclosure when a skill link or a shared URL targets its project.
  function revealLinkedProject() {
    let id;
    try {
      id = decodeURIComponent(location.hash.slice(1));
    } catch {
      return;
    }
    const target = document.getElementById(id);
    if (target?.tagName === 'DETAILS') target.open = true;
  }
  window.addEventListener('hashchange', revealLinkedProject);
  revealLinkedProject();
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
