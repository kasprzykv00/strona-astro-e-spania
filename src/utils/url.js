// Buduje adres z uwzględnieniem "base" (nazwy repozytorium na GitHub Pages)
// url('sklep/') → /strona-astro-e-spania/sklep/
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

// Pełny adres strony (do metadanych Open Graph i danych strukturalnych)
// abs('blog/') → https://kasprzykv00.github.io/strona-astro-e-spania/blog/
export function abs(path = '') {
  return `${import.meta.env.SITE.replace(/\/$/, '')}${url(path)}`;
}

// Czy podany adres to strona główna?
export function isHome(pathname) {
  return pathname.replace(/\/$/, '') === url().replace(/\/$/, '');
}

// Link do sekcji strony głównej (np. #pokoje).
// Na stronie głównej zostaje samo "#pokoje", na innych stronach prowadzi do strony głównej.
export function sekcja(id, pathname) {
  return isHome(pathname) ? `#${id}` : url(`#${id}`);
}
