export function money(value) {
  const fraction = Number.isInteger(value) ? 0 : 2;
  return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', minimumFractionDigits: fraction, maximumFractionDigits: 2 }).format(value);
}

export function longDate(date) {
  return new Intl.DateTimeFormat('pl-PL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
}

export function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

export function ratingText(rating) {
  return rating.toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

export function plural(count, [one, few, many]) {
  if (count === 1) return one;
  const last = count % 10;
  const lastTwo = count % 100;
  return last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14) ? few : many;
}

export const reviewWord = (count) => plural(count, ['opinia', 'opinie', 'opinii']);

export function starIcons(rating) {
  const full = Math.floor(rating + 0.25);
  const half = rating - full >= 0.25 ? 1 : 0;
  return Array.from({ length: 5 }, (_, i) => (i < full ? 'bi-star-fill' : i === full && half ? 'bi-star-half' : 'bi-star'));
}
