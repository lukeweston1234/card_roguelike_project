import React, { useState, useEffect } from "react";
import cardBottom from "../../../assets/card_bottom.png";
import cardImage from "../../../assets/card.png";
import { useSpring, animated, to } from "@react-spring/web";
import { useDrag, useGesture } from "@use-gesture/react";

export interface CardProps {
  cardName: string;
  image: string;
  cardDescription: string;
  isFacingUp: boolean;
  isActive: boolean;
}

export default function Card(cardProps: CardProps) {
  const [isFacingUp, setIsFacingUp] = useState<boolean>(cardProps.isFacingUp);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  //We create three animation states, one for the first half of the animation, one for the second, and one for when the animation state is over
  //We do this because we are actually rendering different components halfway through the animation, so we need to handle some JS logic rather
  //Than just using CSS/Tailwind

  const [isAnimationUnderway, setIsAnimationUnderway] =
    useState<boolean>(false);

  const calcX = (y: number, ly: number) =>
    -(y - ly - window.innerHeight / 2) / 20;
  const calcY = (x: number, lx: number) =>
    (x - lx - window.innerWidth / 2) / 20;
  // Set the drag hook and define component movement based on gesture data

  const [{ x, y, rotateX, rotateY, rotateZ, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const bind = useGesture(
    {
      onDrag: ({ event, offset: [x, y] }) => {
        event.preventDefault();
        api({ x, y });
      },
      onDragEnd: () => {
        api({
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
        });
      },
      //Handles rotation of card when not dragging
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        !isAnimationUnderway &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
        }),
      onHover: ({ hovering }) =>
        //On hover, we increase the scale by 5 percent, and set isHovering to true for the tailwind shadw
        //When we are not hovering (there is not a onHoverEnd hook), we reset all of the properties to set the card down,
        //And change the tailwindCSS shadow to be smaller
        {
          hovering
            ? api({ scale: 1.05 }) && setIsHovering(true)
            : api({
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                scale: 1,
              }) && setIsHovering(false);
        },
      onClick: () => {
        if (isAnimationUnderway) return;
        setIsAnimationUnderway(true);
        api({
          rotateY: 90,
        });
        setTimeout(() => {
          setIsFacingUp(!isFacingUp);
          setIsAnimationUnderway(false);
          api({
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
          });
        }, 300);
      },
    },
    { drag: { filterTaps: true, bounds: document.body } }
  );

  if (isFacingUp) {
    return (
      <animated.div
        {...bind()}
        style={{
          x,
          y,
          scale,
          rotateX,
          rotateY,
          rotateZ,
        }}
        className={`relative m-0 h-[400px] w-[256px] flex-shrink-0 cursor-grab touch-none rounded-[22px] transition-shadow duration-500 ease-in-out ${
          isHovering
            ? "z-[100] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            : "shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
        }
        `}
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
      </animated.div>
    );
  }
  return (
    <animated.div
      {...bind()}
      style={{
        x,
        y,
        scale,
        rotateX,
        rotateY,
        rotateZ,
      }}
      className={`relative  m-0 h-[400px] w-[256px] flex-shrink-0 cursor-grab touch-none rounded-[22px] transition-shadow duration-500 ease-in-out ${
        isHovering
          ? "z-[100] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
          : "shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
      }
      `}
    >
      <img className="w-[256px] rounded-[22px]" src={cardImage}></img>
    </animated.div>
  );
}
