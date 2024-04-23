import { DataHandler } from "./DataHandler.jsx";
import { Card } from "./Card.jsx";
import { useState } from "react";

export function CardList() {
  const pokemonData = DataHandler();
  const [cardList, setCardList] = useState([]);

  pokemonData.map((pokemon, index) => {
    setCardList(
      cardList.concat(
        <Card
          key={index}
          sprite={pokemon.sprites.front_default}
          name={pokemon.name}
          types={pokemon.types}
        />,
      ),
    );
  });


  return cardList;
}
