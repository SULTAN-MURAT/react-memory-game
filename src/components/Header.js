import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restart, scoreSelector } from "../redux/cards/cardsSlice";
function Header() {
  const dispatch = useDispatch();
  const score = useSelector(scoreSelector);
  return (
    <div className="header">
      <h2>Memory Game</h2>
      <div>
        <span>Score:{` ${score}`}</span>
        <button onClick={() => dispatch(restart())} className="restart-btn">Restart Game</button>
      </div>
    </div>
  );
}

export default Header;
