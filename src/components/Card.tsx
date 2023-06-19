import { FC, useState } from "react";
import { ICard } from "../types/types";

interface CardProps {
  card: ICard;
  cardList: ICard[];
  setCardList: React.Dispatch<React.SetStateAction<ICard[]>>;
}

const Card: FC<CardProps> = ({ card, cardList, setCardList }) => {
  const [currentCard, setCurrentCard] = useState<ICard | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setCurrentCard(card);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.style.background = "white";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    target.style.background = "lightgray";
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {};

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setCardList(
      cardList.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentCard?.order! };
        }
          if (c.id === currentCard?.id) {
              return { ...c, order: card?.order! }
        }
        
        else {
          return c;
        }
      })
    );
    };
    

  return (
    <div
      draggable="true"
      onDragStart={handleDragStart}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
      style={{
        border: "5px solid gray",
        borderRadius: "10px",
        padding: "100px",
        display: "flex",
        cursor: "grab",
      }}
    >
      {card.text}
    </div>
  );
};

export default Card;
