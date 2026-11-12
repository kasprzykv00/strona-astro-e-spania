export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function abs(path = '') {
  return `${import.meta.env.SITE.replace(/\/$/, '')}${url(path)}`;
}

export function isHome(pathname) {
  return pathname.replace(/\/$/, '') === url().replace(/\/$/, '');
}

export function sekcja(id, pathname) {
  return isHome(pathname) ? `#${id}` : url(`#${id}`);
}
