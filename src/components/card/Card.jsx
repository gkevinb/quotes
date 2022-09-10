import React, { useRef, useState } from "react";
import lotusTile from "../../assets/lotusTile.png";
import "./Card.scss";
import WaterSymbol from "../../assets/WaterSymbol";
import AirSymbol from "../../assets/AirSymbol";
import FireSymbol from "../../assets/FireSymbol";
import EarthSymbol from "../../assets/EarthSymbol";

function Card({quote, author}) {
  const cardRef = useRef();
  const [flipped, setFlipped] = useState(false);
  const [number, setNumber] = useState(Math.floor(Math.random() * 4));

  const flipFlashcard = () => {
    setFlipped(!flipped);
  };

  const getSymbol = (randomNumber) => {
    switch (randomNumber) {
        case 0:
            return <WaterSymbol />
        case 1:
            return <AirSymbol />
        case 2:
            return <FireSymbol />
        case 3:
            return <EarthSymbol />
        default:
          return null
      }
  }

  return (
    <div className="flashcard__scene">
      <div
        id="quote-card"
        className={flipped ? "flashcard is-flipped" : "flashcard"}
        ref={cardRef}
        onClick={flipFlashcard}>
        <div className="flashcard__face flashcard__face--front">
          <div className="symbol-container">
            <i className="symbol">
              {getSymbol(number)}
            </i>
          </div>
        </div>
        <div className="flashcard__face flashcard__face--back">
          <img id="lotus-tile" src={lotusTile} />
          <p id="quote-text">"{quote}"</p>
          <p id="quote-author">- {author}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
