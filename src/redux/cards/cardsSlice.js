import { createSlice } from "@reduxjs/toolkit/";
import shuffle from "../../services/shuffle";
import {cards} from "../../services/cards";

const dublicatedCards = cards.concat(cards).map((name, index) => ({
  id: index,
  name,
  isClosed: true,
  isCompleted: false,
}));
const shuffledCards = shuffle(dublicatedCards);

const initialState = {
  items: shuffledCards,
  openedCards: [],
  score: 200,
  isReversingCardsFinished:true,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
     restart: (state, action) => {
      state.items = shuffledCards;
      state.score=200;
    },
    addOpenedCards: (state, action) => {
      state.openedCards.push(action.payload);
    },
    removeOpenedCards: (state, action) => {
      state.openedCards = [];
    },
    setOpened: (state, action) => {
      const id  = action.payload;
      const updatedCard= state.items.find(item=>item.id===id);
      updatedCard.isCompleted=true;
    },
    setFlipped: (state, action) => {
      const id  = action.payload;
      const updatedCard= state.items.find(item=>item.id===id);
      updatedCard.isClosed=false;
    },
    reverseFlippedCards: (state, action) => {
      const id  = action.payload;
      const updatedCard= state.items.find(item=>item.id===id);
      updatedCard.isClosed=true;
    },
    updateScore: (state, action) => {
      state.score += action.payload;
    },
    allowFlippingCard:(state, action) => {
      state.isReversingCardsFinished =!state.isReversingCardsFinished;
    },
  },
});

export const {
  restart,
  addOpenedCards,
  removeOpenedCards,
  setOpened,
  updateScore,
  setFlipped,
  reverseFlippedCards,
  allowFlippingCard,
} = cardsSlice.actions;

export const cardSelector = (state) => state.cards.items;
export const scoreSelector = (state) => state.cards.score;
export const openedCardSelector = (state) => state.cards.openedCards;
export const reversingCardsSelector= (state) => state.cards.isReversingCardsFinished;

export default cardsSlice.reducer;
