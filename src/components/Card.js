import React from "react";
import { useDispatch, useSelector } from "react-redux/";
import {
  addOpenedCards,
  setFlipped,
  reversingCardsSelector,
} from "../redux/cards/cardsSlice";
import frontImg from "../assets/card-front.jpg";

function Card({ item }) {
  const dispatch = useDispatch();
  const isReversingCardsFinished = useSelector(reversingCardsSelector);
  const checkCards = () => {
    if (item.isClosed && isReversingCardsFinished) {
      dispatch(setFlipped(item.id));
      dispatch(addOpenedCards(item));
    }
  };
  return (
    <div
      className={
        "card" +
        (!item.isClosed ? " opened" : "") +
        (item.sCompleted ? " matched" : "")
      }
      onClick={checkCards}
    >
      <div className="front">
        <img src={frontImg} alt="card-front" />
      </div>
      <div className="back">
        <img
          src={
            "https://raw.githubusercontent.com/samiheikki/" +
            "javascript-guessing-game/master/static/logos/" +
            item.name +
            ".png"
          }
          alt={item.name}
        />
      </div>
    </div>
  );
}

export default Card;
