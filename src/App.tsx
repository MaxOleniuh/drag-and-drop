import React, { useState } from "react";
import CardList from "./components/CardList";
import { ICard } from "./types/types";
import Card from "./components/Card";

const App = () => {
      const [cardList, setCardList] = useState([
    {
      id: 3,
      order: 3,
      text: "Card 3",
    },
    {
      id: 1,
      order: 1,
      text: "Card 1",
    },
    {
      id: 4,
      order: 4,
      text: "Card 4",
    },
    {
      id: 2,
      order: 2,
      text: "Card 2",
    },
      ]);
   const sortCards = (a: ICard, b: ICard): number => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  return (
    <>
      <CardList cards={cardList} renderItem={(card: ICard) => <Card
          key={card.id}
        card={card}
        cardList={cardList}
        setCardList={setCardList}
      />} sortCards={sortCards} />
      </>
  );
};

export default App;
