import { CardProps } from "../../../../models/cardProps";

export default function CardHeader(cardProps: CardProps) {
  return (
    <div className="[via-transparent] to-[rgba(9, 17, 34, 0)] absolute left-0 top-0 flex h-[140px] w-full flex-col items-center rounded-t-[22px] bg-gradient-to-b from-[#091122]">
      <h1 className="neon-text font-card-header text-[28px] tracking-wider">
        {cardProps.cardName}
      </h1>
      <div className="flex w-full flex-row items-center justify-between pl-4 pr-4">
        <div className="ml-[2px] flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#F2BFD7"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <h6 className="neon-text ml-[2px]">{cardProps.cardStats.health}</h6>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#F2BFD7"
            className="h-4 w-4 shrink-0"
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
          <h6 className="neon-text ml-[2px]">{cardProps.cardStats.damage}</h6>
        </div>
        <div className="flex  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#F2BFD7"
            className="h-4 w-4 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          <h6 className="neon-text ml-[2px]">{cardProps.cardStats.energy}</h6>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#F2BFD7"
            className="h-4 w-4 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h6 className="neon-text ml-[2px]">{cardProps.cardStats.cost}</h6>
        </div>
      </div>
    </div>
  );
}
