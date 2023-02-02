import "./App.css";
import DashBoard from "./DashBoard";
import { DashBoardLayout } from "./DashBoardLayout";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

//import widgets
import BuyersReviewsWidget from "./widgets/BuyersReviewsWidget";
import OrdersWidget from "./widgets/OrdersWidget";
import QualityOfSalesWidget from "./widgets/QualityOfSalesWidget";
import RankingOfOffersWidget from "./widgets/RankingOfOffersWidget";
import SalesAdviceWidget from "./widgets/SalesAdviceWidget";
import SalesChartWidget from "./widgets/SalesChartWidget";


import { ctxAuth } from "./auth";
import React from "react";
import './styles.css';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [authState, setAuthState] = React.useState({
    czyZalogowany: false,
    zalogowany: null,
  });

  const zaloguj = (username) => {
    setAuthState({
      czyZalogowany: true,
      zalogowany: username,
    });
  };

  const wyloguj = () => {
    setAuthState({
      czyZalogowany: false,
      zalogowany: null,
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/dashboard" element={<DashBoardLayout />}>
        <Route index element={<DashBoard />}></Route>
        <Route path="reviews" element={<BuyersReviewsWidget />}></Route>
        <Route path="orders" element={<OrdersWidget />}></Route>
        <Route path="quality" element={<QualityOfSalesWidget />}></Route>
        <Route path="ranking" element={<RankingOfOffersWidget />}></Route>
        <Route path="advice" element={<SalesAdviceWidget />}></Route>
        <Route path="charts" element={<SalesChartWidget />}></Route>
      </Route>,
      <Route path="/home" element={<HomePage />}></Route>,
      <Route path="/" element={<LoginPage />}></Route>,
    ])
  );

  return (
    <ctxAuth.Provider value={{ authState, zaloguj, wyloguj }}>
      <RouterProvider router={router}></RouterProvider>
    </ctxAuth.Provider>
  );
}

export default App;
