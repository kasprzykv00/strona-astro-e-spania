# Responsive Web Design Ćwiczenia 6: – Architektura Uzupełniająca i Integracja Serwisu


**Struktura plików:** `kontakt.html` (nowy), `polityka-prywatnosci.html` (nowy), `404.html` (nowy
Celem czwartego etapu jest domknięcie architektury informacji serwisu oraz wdrożenie stron pomocniczych i formalno-prawnych, niezbędnych w profesjonalnym wdrożeniu internetowym.

Zadanie obejmuje utworzenie pełnej podstrony kontaktowej (`kontakt.html`), uproszczonej podstrony informacyjnej z polityką prywatności (`polityka-prywatnosci.html`), dedykowanej strony obsługi błędu 404 (`404.html`) oraz globalną wymianę dotychczasowej, prostej stopki we wszystkich plikach serwisu na wielokolumnową, rozbudowaną stopkę korporacyjną.), aktualizacja wszystkich dotychczasowych plików HTML (`index.html`, `blog.html`, `single.html`, `sklep.html`, `produkt.html`, `koszyk.html`, `zamowienie.html`, `konto.html`), `style.css` (aktualizacja)

---

## 1. Cel Zadania


Wszystkie podstrony muszą zachować spójność wizualną z dotychczas przygotowanymi modułami oraz pełną integralność hipertekstową (brak martwych linków `href="#"` w obrębie nawigacji i stopki).

---

## 2. Wymagana Zawartość Merytoryczna i Struktura

### A. Dedykowana Podstrona Kontaktowa (`kontakt.html`)

Kompletny moduł komunikacyjny podmiotu:

1. **Nawigacja Okruszkowa (`breadcrumb`):** Ścieżka powrotna: Strona Główna $\rightarrow$ Kontakt.
2. **Nagłówek Podstrony:** Tytuł sekcji (`<h1>`) oraz krótki lead informujący o godzinach pracy biura/obsługi klienta.
3. **Układ Główny Dwukolumnowy:**
    * **Kolumna Danych i Formularza (`<main>`):**
         * Pełne dane rejestrowe podmiotu (nazwa, NIP/REGON, adres fizyczny, bezpośrednie linki `mailto:` oraz `tel:`).
        * Rozbudowany formularz kontaktowy zawierający: imię i nazwisko, adres e-mail, telefon, listę rozwijaną działu docelowego (np. „Obsługa klienta”, „Współpraca”, „Reklamacje”), pole tekstowe wiadomości, checkbox zgody na przetwarzanie danych z linkiem do polityki prywatności oraz przycisk wysyłki.


    * **Kolumna Wizualno-Lokalizacyjna (`<aside>`):**
        * Responsywny kontener z osadzoną mapą dojazdu (znacznik `<iframe>` w klasie Bootstrapa `ratio ratio-16x9` lub `ratio ratio-4x3`).
        * Wskazówki dojazdu (np. najbliższe przystanki komunikacji miejskiej, informacja o parkingu).





---

### B. Podstrona Polityki Prywatności (`polityka-prywatnosci.html`)

Czytelna podstrona dokumentacji prawnej (układ Single bez elementów rozpraszających):

1. **Nawigacja Okruszkowa (`breadcrumb`):** Ścieżka powrotna: Strona Główna $\rightarrow$ Polityka Prywatności.
2. **Struktura Treści (`<article>`):**
    * Układ jednokolumnowy, wyśrodkowany, o kontrolowanej szerokości czytania (np. kontener z siatką `col-12 col-lg-8 mx-auto`).
    * Tytuł dokumentu (`<h1>`) oraz data ostatniej aktualizacji regulaminu.
    * Treść podzielona na sekcje tematyczne opatrzone śródtytułami (`<h2>`):
    * § 1. Administrator Danych Osobowych,
    * § 2. Cele i Podstawy Przetwarzania Danych,
    * § 3. Prawa Użytkownika (RODO),
    * § 4. Polityka Plików Cookies (z zestawieniem tabelarycznym rodzajów cookies w klasie `table-responsive`).


* Brak paneli bocznych (sidebarów), formularzy i bannerów reklamowych – nacisk na typografię i czytelność tekstu.



---

### C. Dedykowana Strona Błędu 404 (`404.html`)

Projekt widoku dla nieodnalezionego zasobu:

1. **Układ Komunikatu:**
    * Układ wycentrowany w pionie i poziomie w głównym oknie przeglądarki (`d-flex`, `flex-column`, `align-items-center`, `justify-content-center`).
    * Wyraziste oznaczenie błędu: duży kod liczbowy „404” (zwiększona typografia) oraz nagłówek (`<h1>`): „Nie znaleziono strony”.
    * Komunikat wyjaśniający (2 zdania) informujący, że strona została przeniesiona lub adres wpisano niepoprawnie.


2. **Elementy Pomocnicze dla Użytkownika:**
    * Pole wyszukiwarki umożliwiające przeszukanie serwisu.
    * Zestaw odnośników ratunkowych w formie przycisków: „Wróć do strony głównej”, „Przejdź do sklepu”, „Skontaktuj się z nami”.



---

### D. Globalna Rozbudowana Stopka Serwisu (`<footer>`)

Dotychczasową, jednolinijkową stopkę we wszystkich utworzonych plikach HTML należy zastąpić rozbudowanym modułem korporacyjnym o strukturze 4-kolumnowej na desktopie:

1. **Kolumna 1 (O marce):**
    * Logo/nazwa podmiotu, 2–3 zdania podsumowania misji oraz ikony linków do mediów społecznościowych (Bootstrap Icons).


2. **Kolumna 2 (Szybka nawigacja):**
    * Zestaw odnośników do głównych sekcji: Strona główna, O nas, Oferta, Blog (`blog.html`), Kontakt (`kontakt.html`).


3. **Kolumna 3 (Strefa klienta / Sklep):**
    * Odnośniki operacyjne: Sklep (`sklep.html`), Koszyk (`koszyk.html`), Moje konto (`konto.html`), Polityka prywatności (`polityka-prywatnosci.html`).


4. **Kolumna 4 (Newsletter i kontakt):**
    * Skrócony formularz zapisu na newsletter (pole e-mail + przycisk w układzie `input-group`).
    * Zwięzły adres e-mail i numer infolinii.


5. **Dolny Pasek Prawny (Sub-footer):**
    * Rozdzielony linią lub kolorem dolny pas zawierający prawa autorskie, informację o autorach projektu oraz link do pliku `polityka-prywatnosci.html`.



---

## 3. Organizacja Kodu CSS

1. **Wspólny arkusz stylów (`style.css`):**
* Wszystkie reguły formatujące nowe widoki (np. wymiary kodu błędu na stronie 404, wygaszone kolory odnośników w stopce, stylizacja mapy) należy dopisać do istniejącego pliku `style.css` w wydzielonym bloku: `/* STRONY POMOCNICZE I STOPKA */`.


2. **Dopuszczalność stylów liniowych (inline styles):**
* Dopuszczalne wyłącznie dla mikrostylów unikalnych dla pojedynczego węzła DOM (np. precyzyjne tło graficzne sekcji 404). Złożone reguły i nadpisania klas Bootstrapa muszą znajdować się w arkuszu `style.css`.