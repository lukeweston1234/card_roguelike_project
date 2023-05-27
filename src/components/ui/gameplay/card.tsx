import React, { useState } from "react";
import cardImage from "../../../assets/card.png";

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="h-auto w-44 rounded-[22px] ">
      {isFlipped && <img src={cardImage}></img>}
      {!isFlipped && <img src={cardImage}></img>}
    </div>
  );
}
