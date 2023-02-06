# Projekt_ProjektowanieGraficznychInterfejsówUżytkownika
### Mini-projekt zrealizowany w ramach przedmiotu "Projektowanie Graficznych Interfejsów Użytkownika", semestr V na Politechnice Warszawskiej. Celem było napisanie prostej aplikacji SPA - **"Panelu Sprzedawcy"**, będącej częścią portalu zakupowego, na której użytkownik może zobaczyć podsumowanie swojej sprzedaży.
***
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
