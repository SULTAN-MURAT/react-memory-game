import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  allowFlippingCard,
  cardSelector,
  openedCardSelector,
  removeOpenedCards,
  reverseFlippedCards,
  setOpened,
  updateScore,
} from "../redux/cards/cardsSlice";
import Card from "./Card";

function CardContainer() {
  const dispatch = useDispatch();
  const cards = useSelector(cardSelector);
  console.log(cards);
  const openedCards = useSelector(openedCardSelector);
  console.log("opened Cards", openedCards);

  useEffect(() => {
    dispatch(allowFlippingCard());
  }, [dispatch]);

  useEffect(() => {
    if (openedCards.length === 2) {
      setTimeout(() => {
        if (
          openedCards[0].name === openedCards[1].name &&
          openedCards[0].id !== openedCards[1].id
        ) {
          dispatch(updateScore(+50));
          openedCards.forEach((item) => dispatch(setOpened(item.id)));
          dispatch(allowFlippingCard());
        } else {
          openedCards.forEach((item) => dispatch(reverseFlippedCards(item.id)));
          dispatch(updateScore(-10));
          dispatch(allowFlippingCard());
        }
        dispatch(removeOpenedCards());
      }, 300);
      dispatch(allowFlippingCard());
    }
  }, [openedCards, dispatch]);


  return (
    <div className="card-container">
      {cards &&
        cards.map((item, index) => (
          <Card key={Math.random() * Date.now()} item={item} />
        ))}
    </div>
  );
}

export default CardContainer;
