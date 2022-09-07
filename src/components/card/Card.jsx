import React, { useRef, useState } from "react";
import lotusTile from "../../assets/lotusTile.png";
import "./Card.scss";
// import { waterSymbol, airSymbol, earthSymbol, fireSymbol } from "../../assets/elements.js"
import WaterSymbol from "../../assets/WaterSymbol";

function Card({quote, author}) {
  const cardRef = useRef();
  const [flipped, setFlipped] = useState(false);

  const flipFlashcard = () => {
    setFlipped(!flipped);
  };

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
              <WaterSymbol />
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
