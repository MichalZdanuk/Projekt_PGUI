# SellerDashboard
### Mini-projekt zrealizowany w ramach przedmiotu "Projektowanie Graficznych Interfejsów Użytkownika", semestr V na Politechnice Warszawskiej. Celem było napisanie prostej aplikacji SPA - **"Panelu Sprzedawcy"**, będącej częścią portalu zakupowego, na której użytkownik może zobaczyć podsumowanie swojej sprzedaży.

### Demo
* logowanie do panelu

![home_pgui](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/77b99952-d766-4779-8f04-3307e3cceda2)

* zmiana języka

![lang_pgui](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/99cb434b-6fd2-4d59-a8f4-a7835d9b6948)

* zmiana motywu kolorystycznego

![theme_pgui](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/f5f6632c-3aa5-4d3c-b0bf-08fe509bd6c2)
#### Strona Główna

![home](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/36e30235-47da-449e-9284-73fb6592fd5f)


#### Widget: Zamówienia
* podsumowanie zamówień

![orders](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/f97555fb-e616-41bd-ac01-4067fe353306)

* zamówienia nieopłacone

![orders_not_paid](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/e17ad3fe-85a5-4e12-967a-94015323d44d)

#### Widget: Jakość Sprzedaży
![quality](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/920bd4fa-531a-41f9-ba7d-7aae8b35f063)

#### Widget: Opinie Kupujących
* lista wszystkich opinii

![opinions](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/7657ef46-12bd-47e3-87c0-9c698dd335e8)

* lista pozytywnych opinii

![opinions_positive](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/3ebad726-efed-4137-b143-6f07f0a1bb63)

#### Widget: Wykres Sprzedaży
* wykres liniowy od obrotu

![linechart_turnover](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/29bfbe6a-ea7b-468b-8da5-377efbbab012)

* wykres słupkowy od liczby sztuk

![barchart_amount](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/e23e28cd-039c-490f-9729-e83a05028864)

#### Widget: Ranking Ofert
* oferty posortowane względem obrotu

![ranking](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/b3b77d42-fe2e-4d6b-a374-b443c9f5518c)

#### Widget: Porady Sprzedażowe
* lista porad sprzedażowych

![advices](https://github.com/MichalZdanuk/Projekt_PGUI/assets/76063659/a55f58fb-dd3b-4991-b44a-6dfbd6c4868e)

### Instrukcja uruchomienia aplikacji:
Wymagane zainstalowanie stabilnej wersji Node.js: https://nodejs.org/en/.
Instrukcja.
* sklonowanie repozytorium: **git clone 'https://github.com/MichalZdanuk/Projekt_PGUI.git'**
* przejście do katalogu projektu: **cd proj-pgui**
* zainicjalizowanie aplikacji: **npm init**
* zainstalowanie zależności: **npm install react-router, recharts, react-grid-layout, styled-components**
* uruchomienie aplikacji: **npm start**

Po wykonaniu instrukcji aplikacja powinna otworzyć się w przeglądarce na localhost z portem 3000

### Wykorzystane technologie:
Aplikacja została napisana w technologii front-endowej React. Stan przechowywany był w komponentach funkcyjnych przy pomocy hooków(głównie useState, useContext, useLocation).
Przechowywanie stanu globalnego takiego jak wybrany: język, motyw kolorystyczny zrealizowane zostały za pomocą *ReactContext*.

Wykorzystane dodatkowe biblioteki/zależności:
* **react-router-dom**,
* **recharts**,
* **react-grid-layout**,
* **styled-components**

### Założenie dotyczące projektu:
Główne założenia panelu:
* dostęp do "Panelu Sprzedawcy" poprzez logowanie
* zawiera widgety: "Zamówienia", "Jakość Sprzedaży", "Opinie Kupujących", "Ranking Ofert", "Wykres Sprzedaży", "Porady Sprzedażowe"
* dostępność w 2 językach: a) angielski b) polski
* dostępność 2 motywów kolorystycznych: a) ciemny b) jasny

Szczegółowy opis wymagań dotyczących projektu znajduje się w pliku: *"ZarysProjektu"*

Pierwotnie projekt napisay był na platformie "codesandbox.io". Kod projektu przed refaktryzacją: "https://codesandbox.io/s/pgui2022z-proj-mm-mz-oykr1t". Zdecydowałem się kompletnie zreformować projekt, ponieważ kod był "nieelegancki" tzn. pełny niepotrzebnej redundancji kodu, nieprzemyślanie napisane funkcje, "sztywny kod" totalnie nieresponsywny oraz wykorzystanie starego sposobu programowania w React - z pomocą komponentów klasowych. Poza tym projekt był bardzo niespójny (tzn. mieszane nazewnictwo zmiennych polski/angielskie, łamanie konwencji raz camelCase, a potem oddzielanie słów _). Te niedoskonałości zmotywowały mnie do napisania projektu niejako od nowa, bazując na pierwotnym kodzie. Poza kodem zmieniłem także koncepcję. Poprzednio panel opierał sięna warunkowo pojawiających się widgetach w formie "sticky notes". Zmieniłem to na jedną stronę, gdzie mamy od razu karteczki-miniaturki z ważnym podumowaniem. Po kliknięciu w karteczkę jesteśmy przekierowani do strony ze szczegółowym widgetem. Z czego jestem szczególnie zadowolony to to, że udało się zaimplementować responsywaność przez możliwość dowolnego przesuwania względem siebie karteczek.

**Koncepcją graficzną do wykonania strony głównej z karteczkami z podsumowaniem widgetów zainspirowałem się z fajnie wykonanego projektu z lat ubiegłych przez innych studentów Politechniki Warszawskiej. Jednakże cały kod projektu został napisany samodzielnie. Linki do projektu, z którego wykorzystałem koncept graficzny kartek:**

* link do repozytorium: https://github.com/k-piekarczyk/pgui-dashboard/tree/main/
* link do sandboxa: https://icy8j.csb.app/dashboard
