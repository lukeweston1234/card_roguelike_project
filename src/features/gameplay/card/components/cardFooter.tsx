import { CardProps } from "../../../../models/cardProps";
import cardBottom from "../../../../assets/images/card_bottom.png";

export default function CardFooter(cardProps: CardProps) {
  return (
    <div className="absolute bottom-0 left-0 self-end ">
      <img
        draggable="false"
        className="relative h-[104px] w-[256px] rounded-b-[22px]"
        src={cardBottom}
      ></img>
      <div className="absolute left-0 top-0 m-1 flex h-full w-full flex-col">
        <h2 className="neon-text font-details text-[18px]">
          {cardProps.cardStats.class}
        </h2>
        <span className="neon-text font-details text-[14px]">
          {cardProps.cardDescription}
        </span>
      </div>
    </div>
  );
}
