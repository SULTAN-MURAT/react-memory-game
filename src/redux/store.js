import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cards/cardsSlice";

export const store = configureStore({
  reducer: { cards: cardsReducer },
});
