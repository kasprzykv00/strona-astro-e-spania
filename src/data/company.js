// Jedno źródło danych firmy — używane w stopce, na stronie kontaktu, w polityce prywatności i w JSON-LD.
export const company = {
  brand: 'e-spania',
  legalName: 'e-spania S.L.',
  nif: 'B-12345678',
  address: {
    street: 'Passeig de la Llum 12',
    postalCode: '08003',
    city: 'Barcelona',
    country: 'Hiszpania',
    countryCode: 'ES',
  },
  email: 'kontakt@e-spania.example',
  phone: '+34 900 000 123',
  phoneHref: 'tel:+34900000123',
  hours: {
    text: 'Biuro obsługi gości odpowiada od poniedziałku do piątku w godz. 9:00–18:00, a w soboty w godz. 10:00–14:00 (czasu hiszpańskiego).',
    schema: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
      { days: ['Saturday'], opens: '10:00', closes: '14:00' },
    ],
  },
  geo: { lat: 41.3835, lng: 2.184 },
  hotels: [
    { city: 'Barcelona', street: 'Passeig de la Llum 12', postalCode: '08003', locality: 'Barcelona' },
    { city: 'Malaga', street: 'Paseo del Sol 18', postalCode: '29016', locality: 'Málaga' },
    { city: 'Madryt', street: 'Calle de la Luz 21', postalCode: '28014', locality: 'Madrid' },
  ],
  social: [
    { name: 'Instagram', icon: 'bi-instagram', href: 'https://www.instagram.com/' },
    { name: 'Facebook', icon: 'bi-facebook', href: 'https://www.facebook.com/' },
    { name: 'YouTube', icon: 'bi-youtube', href: 'https://www.youtube.com/' },
    { name: 'TikTok', icon: 'bi-tiktok', href: 'https://www.tiktok.com/' },
  ],
};

export const fullAddress = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`;
