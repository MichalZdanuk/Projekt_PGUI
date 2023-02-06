import React from "react";
import { useState } from "react";

const pl = {
  orders: "Zamówienia",
  qualityOfSales: "Jakość Sprzedaży",
  buyersReviews: "Opinie Kupujących",
  rankingOfOffers: "Ranking Ofert",
  salesChart: "Wykres Sprzedaży",
  salesAdvice: "Porady Sprzedażowe",
  language: "Język: ",
  theme: "Motyw: ",
  qualityRate: "Ocena Jakości: ",
  receivedCategory: "Przyznana kategoria: ",
  worstAspects: "Najgorsze Aspekty",
  welcome: "Witaj, ",
  checkDetails: "SZCZEGÓŁY",
  lineChart: "LINIOWY",
  barChart: "SŁUPKOWY",
  return: "Powrót do: ",
  homePage: "Strona Główna",
  dashboard: "Panel Sprzedawcy",
  notPaid: "Nieopłacone: ",
  notSent: "Niewysłane: ",
  refunds: "Zwroty: ",
  lastWeek: "ostatni tydzień",
  lastMonth: "ostatni miesiąc",
  lastYear: "ostatni rok",
  analyzeData: "Analizuj dane z wykresu:",
  light: "JASNY",
  dark: "CIEMNY",
  customersReviewThumbnail: "pozytywnych opinii w ostatnim miesiącu",
  positiveOpinion: "pozytywna",
  POSITIVE: "POZYTYWNE",
  negativeOpinion: "negatywna",
  NEGATIVE: "NEGATYWNE",
  ALL: "WSZYSTKIE",
  bestSeller: "Najlepiej sprzedawane",
  worstSeller: "Najgorzej sprzedawane",
  incorrectUsername: "Niepoprawna nazwa użytkownika",
  pleaseLoginIn: "Zaloguj się, aby zobaczyć DashBoard Sprzedawcy",
  logIn: "Zaloguj",
  logOut: "Wyloguj",
  mustBeLogged: "Musisz być zalogowany, aby uzyskać dostęp do tej strony",
  NOTSENT: "NIEWYSŁANE",
  NOTPAID: "NIEOPŁACONE",
  REFUNDS: "ZWROTY",
  currentlyProcessedOrders: "Obecnie realizowane zamówienia",
  turnover: "OBRÓT",
  how_many: "LICZBA SZTUK",
  MOSTTURNOVER: "OBRÓT",
  MOSTAMOUNT: "L.SZTUK",
  LEASTVIEWS: "L.WYŚW.",
  LEASTAMOUNT: "L.SZTUK",
  name: "NAZWA",
  image: "ZDJĘCIE",
  noOrders: "Brak zamówień",
  noOpinion: "Brak opinii",
  noQualityData: "Niewystarczająco danych, by policzyć jakość!!!",
  noOffers: "Brak ofert od sprzedawcy",
  homePageDescription1:
    "Przed sobą masz Panel Sprzedawcy - aplikcja SPA. Projekt zrealizowany przeze mnie w ramach przedmiotu: ",
  pgui: "Projektowanie graficznych interfejsów użytkownika",
  homePageDescription2: " na ",
  university: "Politechnice Warszawskiej",
  department: "kierunek: Informatyka Stosowana, wydział: Elektryczny",
  homePageDescription3:
    "Aplikacja napisana w 100% w technologii: React. Wykorzystane zależności: react-router-dom, react-grid-layout, recharts, styled-components",
  linkToRepo: "Link do repozytorium z projektem: ",
  homePageDescription4:
    "Aby przejść do Panelu Sprzedawcy naciśnij te 'kartke'.",
  logged: "Zalogowany: ",
  decentCategory: "PRZYZWOITY",
};

const en = {
  orders: "Orders",
  qualityOfSales: "Quality of Sales",
  buyersReviews: "Buyers' Reviews",
  rankingOfOffers: "Ranking of Offers",
  salesChart: "Sales Chart",
  salesAdvice: "Sales Advice",
  language: "Language: ",
  theme: "Theme: ",
  qualityRate: "Quality Rate: ",
  receivedCategory: "Received Category: ",
  worstAspects: "Worst Aspects",
  welcome: "Welcome, ",
  checkDetails: "CHECK DETAILS",
  lineChart: "LINE",
  barChart: "BAR",
  return: "Return to: ",
  homePage: "Home Page",
  dashboard: "DashBoard",
  notPaid: "Not paid: ",
  notSent: "Not sent: ",
  refunds: "Refunds: ",
  lastWeek: "last week",
  lastMonth: "last month",
  lastYear: "last year",
  analyzeData: "Analize data from chart:",
  light: "LIGHT",
  dark: "DARK",
  customersReviewThumbnail: "positive opinions last month",
  positiveOpinion: "positive",
  POSITIVE: "POSITIVE",
  negativeOpinion: "negative",
  NEGATIVE: "NEGATIVE",
  ALL: "ALL",
  bestSeller: "Best seller",
  worstSeller: "Worst seller",
  incorrectUsername: "Incorrect username",
  pleaseLoginIn: "Log in to see Seller's DashBoard",
  logIn: "Log in",
  logOut: "Log out",
  mustBeLogged: "You must be logged to get access to this page",
  NOTSENT: "NOT SENT",
  NOTPAID: "NOT PAID",
  REFUNDS: "REFUNDS",
  currentlyProcessedOrders: "Currently processed orders",
  turnover: "TURNOVER",
  how_many: "AMOUNT",
  MOSTTURNOVER: "TURNOVER",
  MOSTAMOUNT: "AMOUNT",
  LEASTVIEWS: "VIEWS",
  LEASTAMOUNT: "AMOUNT",
  name: "NAME",
  image: "IMAGE",
  noOrders: "No orders yet",
  noOpinion: "No opinions yet",
  noQualityData: "Not collected enough data to calculate quality!!!",
  noOffers: "No offers from seller yet",
  homePageDescription1:
    "In front of you see Seller's DashBoard- Single Page Aplication. Project was realized by myself on course: ",
  pgui: "Graphical User Interfaces Design",
  homePageDescription2: " on ",
  university: "Warsaw University of Technology",
  department: "field: Applied Computer Science, department: Electrical",
  homePageDescription3:
    "Aplication has been written 100% in technology: React. Used dependencies: react-router-dom, react-grid-layout, recharts, styled-components",
  linkToRepo: "Link to repo with project: ",
  homePageDescription4: "To enter DashBoard click this 'card'.",
  logged: "Logged as: ",
  decentCategory: "DECENT",
};

export const LangContext = React.createContext({
  lang: "en",
  setLang: () => {},
  tr: (s) => {},
  Tr: (props) => {},
});

export function LangContextProvider(props) {
  const [lang, setLang] = useState("en");
  const tr = (s) => {
    let r = null;
    if (lang === "en") r = en[s];
    else if (lang === "pl") r = pl[s];

    if (!r) {
      return s;
    }
    return r;
  };
  const Tr = (props) => {
    return <>{tr(props.children)}</>;
  };
  const value = { lang, setLang, tr, Tr };

  return (
    <LangContext.Provider value={value}>{props.children}</LangContext.Provider>
  );
}
