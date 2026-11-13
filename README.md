# e-spania w Astro

Strona hoteli e-spania (Barcelona, Malaga, Madryt) z blogiem i sklepem, przeniesiona ze statycznego HTML do [Astro](https://astro.build).

Adres na GitHub Pages: https://kasprzykv00.github.io/strona-astro-e-spania/

## Uruchomienie lokalnie

```
npm install
npm run dev
```

Strona działa pod adresem `http://localhost:4321/strona-astro-e-spania/`.

## Publikacja

Każdy push na gałąź `main` uruchamia `.github/workflows/deploy.yml`, który buduje stronę i wysyła ją na GitHub Pages.
W repozytorium: **Settings → Pages → Source: GitHub Actions**.

## Struktura

```
src/
  components/
    Header.astro        nagłówek (logo, menu, język, konto, koszyk)
    Footer.astro        stopka (4 kolumny: marka, nawigacja, strefa klienta, newsletter i kontakt)
    PostCard.astro      karta wpisu na blogu
    ProductCard.astro   karta produktu
    Stars.astro         gwiazdki oceny
    BlogSidebar.astro   pasek boczny bloga (kategorie, polecane)
    IconSprite.astro    ikony SVG
    Toast.astro         okienko powiadomień
  layouts/
    Layout.astro        wspólny szkielet strony (<head>, Header, Footer, skrypty)
  content/
    blog/*.md           wpisy na blogu (1 plik = 1 wpis)
    products/*.md       produkty w sklepie (1 plik = 1 produkt)
  content.config.ts     jakie pola mają wpisy i produkty
  data/authors.js       autorzy wpisów
  data/company.js       dane firmy (nazwa, NIF, adres, e-mail, telefon) — jedno źródło dla stopki, kontaktu i JSON-LD
  pages/
    index.astro         strona główna
    blog/[...page].astro  archiwum bloga z podziałem na strony (/blog/, /blog/2/…)
    blog/[id].astro       pojedynczy wpis (/blog/pogoda/)
    sklep/index.astro     katalog sklepu
    sklep/[id].astro      karta produktu (/sklep/costa/)
    koszyk, zamowienie, platnosc, rezerwacja, konto  — pozostałe podstrony
    kontakt.astro         kontakt: dane firmy, formularz, mapa dojazdu
    polityka-prywatnosci.astro  polityka prywatności i cookies
    404.astro             strona błędu 404 z wyszukiwarką (GitHub Pages serwuje ją jako 404.html)
  utils/
    url.js              adresy z uwzględnieniem nazwy repozytorium (base)
    format.js           ceny, daty, oceny
public/
  assets/               zdjęcia, logo, wideo
  css/styles.css        style strony
  js/                   skrypty (menu, rezerwacja, koszyk, wersje językowe)
```

## Jak dodać wpis na blogu

Utwórz plik `src/content/blog/nazwa-wpisu.md` (nazwa pliku = adres `/blog/nazwa-wpisu/`):

```md
---
title: "Pełny tytuł wpisu"
shortTitle: "Krótki tytuł"
excerpt: "Zajawka widoczna na karcie."
category: "Zwiedzanie"
date: 2026-11-10
author: oskar
image: "assets/images/blog/zdjecie-800.webp"
imageAlt: "Opis zdjęcia"
tags: ["Hiszpania"]
---

Treść wpisu w Markdownie.
```

## Jak dodać produkt

Skopiuj dowolny plik z `src/content/products/` i zmień dane. Nazwa pliku to adres produktu (`/sklep/nazwa/`).
Produkty z plików `.md` trafiają też do koszyka i filtrów (Layout przekazuje je skryptom jako `window.ES_PRODUCTS`).

## O projekcie

e-spania to fikcyjny hotel — projekt na Responsive Web Design: Oskar Kasprzyk, Dawid Jajko, Krystian Jałocha.
Koszyk, zamówienia i konto zapisują się w `localStorage` przeglądarki (bez backendu). Zdjęcia z Pexels.
