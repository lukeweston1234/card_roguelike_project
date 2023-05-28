import React, { useState, useEffect } from "react";
import cardBottom from "../../../assets/card_bottom.png";
import cardImage from "../../../assets/card.png";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export interface CardProps {
  cardName: string;
  image: string;
  cardDescription: string;
  isFacingUp: boolean;
}

export default function Card(cardProps: CardProps) {
  const [isFacingUp, setIsFacingUp] = useState(cardProps.isFacingUp);
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(
    ({ event, down, movement: [mx, my] }) => {
      event.preventDefault();
      api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
    },
    { filterTaps: true }
  );
  if (isFacingUp) {
    return (
      <animated.div
        {...bind()}
        onClick={() => setIsFacingUp(!isFacingUp)}
        style={{ x, y }}
        className="relative m-0 h-[400px] w-[256px] flex-shrink-0 rounded-[22px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
      >
        <img
          className="h-[400px] w-[256px]  rounded-[22px]"
          src={cardProps.image}
        ></img>
        <div className="absolute bottom-0 left-0 self-end ">
          <img
            className="h-[104px] w-[256px]  rounded-b-[22px]"
            src={cardBottom}
          ></img>
        </div>
      </animated.div>
    );
  }
  return (
    <animated.div
      {...bind()}
      onClick={() => setIsFacingUp(!isFacingUp)}
      style={{ x, y }}
      className="m-0 flex  h-[400px] w-[256px] flex-shrink-0 flex-col rounded-[22px]  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] "
    >
      <img className="w-[256px] rounded-[22px]" src={cardImage}></img>
    </animated.div>
  );
}
