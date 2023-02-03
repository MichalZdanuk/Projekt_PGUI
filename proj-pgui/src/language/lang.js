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
    welcome: "Witaj ",
    chechDetails: "SPRAWDŹ SZCZEGÓŁY"
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
    welcome: "Welcome ",
    chechDetails: "CHECK DETAILS"
};

export const LangContext = React.createContext({
    lang: "en",
    setLang: () => {},
    tr: (s) => {},
    Tr: (props) => {}
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