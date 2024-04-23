import { DataHandler } from "./DataHandler.jsx";
import { Card } from "./Card.jsx";
import { useState } from "react";

export function CardList() {
  const productData = DataHandler();
  const [cardList, setCardList] = useState([]);

  productData.map((product, index) => {
    setCardList(
      cardList.concat(
        <Card
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
        />,
      ),
    );
  });


  return cardList;
}
