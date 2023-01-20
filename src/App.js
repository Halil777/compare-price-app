import React, { createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComparePrice from "./components/ComparePrice";
import Index from "./index/Index";
import Chocolate from "./pages/Chocolate";
import DiscountProducts from "./pages/DiscountProducts";
import Home from "./pages/Home";
import MeatProducts from "./pages/MeatProducts";
import SoftDrinks from "./pages/SoftDrinks";

export const AppContext = createContext({});

function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    let lng = localStorage.getItem("lng");
    if (typeof lng !== "undefined" && lng !== null && lng !== "") {
      changeLanguage(lng);
    }
  }, []);
  return (
    <>
      <AppContext.Provider
        value={{
          t: t,
          changeLanguage: changeLanguage,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path={"/"} element={<Index />}>
              <Route path={"/comparePrice"} element={<ComparePrice />} />
              <Route path={"/meatProducts"} element={<MeatProducts />} />
              <Route path={"/chocolate"} element={<Chocolate />} />
              <Route path={"/softDrinks"} element={<SoftDrinks />} />
              <Route
                path={"/discountProducts"}
                element={<DiscountProducts />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
