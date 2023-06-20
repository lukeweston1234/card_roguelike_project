import { useState } from "react";
import cardBottom from "../../../assets/images/card_bottom.png";
import cardImage from "../../../assets/images/card.png";
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { CardProps } from "../../../models/cardProps";

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
          draggable="false"
          className="h-[400px] w-[256px] rounded-[22px]"
          src={cardProps.image}
        ></img>
        <div className="[via-transparent] to-[rgba(9, 17, 34, 0)] absolute left-0 top-0 flex h-[140px] w-full flex-col items-center rounded-t-[22px] bg-gradient-to-b from-[#091122]">
          <h2 className="neon-text m-2 font-card-header">
            {cardProps.cardName}
          </h2>
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#F2BFD7"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>

            <h6 className="neon-text">{cardProps.cardStats.health}</h6>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 self-end ">
          <img
            draggable="false"
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
      <img
        className="w-[256px] rounded-[22px]"
        draggable="false"
        src={cardImage}
      ></img>
    </animated.div>
  );
}
