// Buduje adres z uwzględnieniem "base" (nazwy repozytorium na GitHub Pages)
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
 
// Link do sekcji strony głównej (np. #pokoje).
// Na stronie głównej zostaje samo "#pokoje", na innych stronach prowadzi do strony głównej.
export function sekcja(id, pathname) {
  const home = url().replace(/\/$/, '');
  const isHome = pathname.replace(/\/$/, '') === home;
  return isHome ? `#${id}` : `${home}/#${id}`;
}
 