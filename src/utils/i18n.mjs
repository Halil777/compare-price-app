import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      products: "Продукты",
      meatP: "Мясные продукты",
      choco: "Шоколад",
      softDrinks: "Безалкогольные напитки",
      discountProducts: "Товары со скидкой",
    },
  },
  tm: {
    translation: {
      products: "Onumler",
      meatP: "Et Onumleri",
      choco: "Shokolad",
      softDrinks: "Alkogolsyz içgiler",
      discountProducts: "Arzanladyş önümleri",
    },
  },

  en: {
    translation: {
      meatP: "Meat Products",
      products: "Products",
      choco: "Chocolate",
      softDrinks: "Soft Drinks",
      discountProducts: "Discount Products",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tm",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
