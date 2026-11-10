/* =========================================================
   e-spania — dane sklepu i rezerwacji (fikcyjny hotel, projekt RWD)
   Tutaj zmieniasz ceny, opisy produktów, dodatki i wycieczki.
   Produkty są w plikach src/content/products/*.md (projekt Astro).
   ========================================================= */
window.ES_DATA = (() => {
  // Produkty pochodzą z plików src/content/products/*.md — Layout.astro przekazuje je jako window.ES_PRODUCTS.
  // Ceny, warianty i opisy produktów zmieniasz więc w plikach .md, nie tutaj.
  const products = window.ES_PRODUCTS || [];
  const base = window.ES_BASE || '';

  const rooms = [
    { id: 'classic', name: 'Pokój Classic', capacity: 2, price: 420, area: 'ok. 22 m²', bed: 'łóżko podwójne', image: `${base}assets/images/room-classic.webp`, alt: 'Jasny pokój z podwójnym łóżkiem i białą pościelą', text: 'Jasne wnętrze z naturalnymi tkaninami i rękodziełem.' },
    { id: 'deluxe', name: 'Pokój Deluxe', capacity: 2, price: 560, area: 'ok. 30 m²', bed: 'łóżko king-size', image: `${base}assets/images/room-deluxe.webp`, alt: 'Przestronny pokój z lnianą pościelą i rzeźbionym panelem nad łóżkiem', text: 'Więcej przestrzeni, rzeźbione detale i len w odcieniach piasku.' },
    { id: 'junior', name: 'Junior Suite', capacity: 3, price: 720, area: 'ok. 38 m²', bed: 'king-size + sofa', image: `${base}assets/images/room-junior.webp`, alt: 'Sypialnia z łukowymi oknami wychodzącymi na zieleń', text: 'Łukowe okna, grube ściany i strefa wypoczynku.' },
    { id: 'suite', name: 'Suite z balkonem', capacity: 4, price: 980, area: 'ok. 48 m²', bed: 'balkon', image: `${base}assets/images/room-suite.webp`, alt: 'Otwarte drzwi balkonowe z widokiem na morze o zmierzchu', text: 'Prywatny balkon i najwięcej przestrzeni.' },
  ];

  // unit: person-night = za osobę za noc, night = za noc, stay = jednorazowo
  const extras = [
    { id: 'breakfast', name: 'Śniadanie w patio', text: 'Świeże pieczywo, owoce, oliwa i kawa podawane do 11:00.', price: 59, unit: 'person-night', unitLabel: 'os. / noc', icon: 'bi-cup-hot' },
    { id: 'transfer', name: 'Transfer z lotniska', text: 'Kierowca czeka w hali przylotów z tabliczką.', price: 180, unit: 'stay', unitLabel: 'za przejazd', icon: 'bi-car-front' },
    { id: 'late', name: 'Późne wymeldowanie', text: 'Pokój zostaje Twój do 16:00 w dniu wyjazdu.', price: 90, unit: 'stay', unitLabel: 'jednorazowo', icon: 'bi-clock' },
    { id: 'parking', name: 'Miejsce parkingowe', text: 'Strzeżony parking w garażu hotelu.', price: 70, unit: 'night', unitLabel: 'za noc', icon: 'bi-p-square' },
    { id: 'cava', name: 'Cava i owoce w pokoju', text: 'Czekają schłodzone na Twój przyjazd.', price: 120, unit: 'stay', unitLabel: 'jednorazowo', icon: 'bi-gift' },
  ];

  // Wycieczki zależą od miasta — mają termin, dlatego wybiera się je przy rezerwacji, a nie w sklepie
  const excursions = {
    barcelona: [
      { id: 'bcn-gaudi', name: 'Sagrada Família i Park Güell', text: 'Pół dnia z przewodnikiem, bilety bez kolejki.', price: 249, duration: '5 godzin' },
      { id: 'bcn-rejs', name: 'Rejs o zachodzie słońca', text: 'Katamaran wzdłuż wybrzeża, kieliszek cavy na pokładzie.', price: 199, duration: '2 godziny' },
      { id: 'bcn-tapas', name: 'Warsztaty tapas w Dzielnicy Gotyckiej', text: 'Zakupy na targu La Boqueria i wspólne gotowanie.', price: 229, duration: '3 godziny' },
    ],
    malaga: [
      { id: 'agp-alhambra', name: 'Alhambra w Granadzie', text: 'Całodniowa wycieczka autokarem z biletami wstępu.', price: 389, duration: '10 godzin' },
      { id: 'agp-caminito', name: 'Szlak Caminito del Rey', text: 'Kładki nad wąwozem z transferem i przewodnikiem.', price: 299, duration: '6 godzin' },
      { id: 'agp-ronda', name: 'Ronda i degustacja win', text: 'Miasto nad przepaścią i wizyta w lokalnej winnicy.', price: 269, duration: '8 godzin' },
    ],
    madryt: [
      { id: 'mad-prado', name: 'Prado z przewodnikiem', text: 'Velázquez, Goya i El Greco w małej grupie.', price: 179, duration: '2,5 godziny' },
      { id: 'mad-toledo', name: 'Toledo w jeden dzień', text: 'Średniowieczne miasto trzech kultur z transferem.', price: 279, duration: '8 godzin' },
      { id: 'mad-flamenco', name: 'Wieczór flamenco', text: 'Kameralny występ w tablao i kolacja z tapas.', price: 219, duration: '3 godziny' },
    ],
  };

  const cities = {
    barcelona: { name: 'Barcelona', hotel: 'e-spania Barcelona', locative: 'w Barcelonie' },
    malaga: { name: 'Malaga', hotel: 'e-spania Malaga', locative: 'w Maladze' },
    madryt: { name: 'Madryt', hotel: 'e-spania Madryt', locative: 'w Madrycie' },
  };

  const delivery = {
    kurier: { name: 'Kurier', price: 14.9 },
    paczkomat: { name: 'Paczkomat', price: 9.9 },
    odbior: { name: 'Odbiór osobisty', price: 0 },
  };

  const payments = { blik: 'BLIK', karta: 'Karta płatnicza', przelew: 'Szybki przelew' };

  const discountCodes = { HOLA10: 0.1 };

  return { products, rooms, extras, excursions, cities, delivery, payments, discountCodes };
})();
