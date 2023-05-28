import React, { useState } from "react";
import cardBottom from "../../../assets/card_bottom.png";
import cardImage from "../../../assets/card.png";

interface CardProps {
  cardName: string;
  image: string;
  cardDescription: string;
  isFacingUp: boolean;
}

export default function Card(cardProps: CardProps) {
  const [isFacingUp, setIsFacingUp] = useState(cardProps.isFacingUp);
  if (isFacingUp) {
    return (
      <div
        onClick={() => setIsFacingUp(!isFacingUp)}
        className="relative m-0 h-[400px] w-[256px] flex-shrink-0 rounded-[22px]  "
      >
        <img
          className="h-[400px] w-[256px] rounded-[22px]"
          src={cardProps.image}
        ></img>
        <div className="absolute bottom-0 left-0 self-end ">
          <img
            className="h-[104px] w-[256px] rounded-b-[22px]"
            src={cardBottom}
          ></img>
        </div>
      </div>
    );
  }
  return (
    <div
      onClick={() => setIsFacingUp(!isFacingUp)}
      className="m-0 flex h-[400px] w-[256px] flex-shrink-0 flex-col rounded-[22px]   "
    >
      <img className="w-[256px] rounded-[22px]" src={cardImage}></img>
    </div>
  );
}
