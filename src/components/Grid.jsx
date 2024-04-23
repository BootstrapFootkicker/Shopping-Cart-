import "..//styles/grid.css";
import { Card } from "./Card.jsx";
import { useState, useEffect } from "react";

export function Grid({productData}) {
  const [cardList, setCardList] = useState([]);


 useEffect(() => {
  const newCardList = productData.map((product, index) => (
    <Card
      key={index}
      image={product.image}
      name={product.title}
      price={product.price}
    />
  ));
  setCardList(newCardList);
}, [productData]);

  // function cardClick(name) {
  //         if (clicked.includes(name)) {
  //             if (score > highScore) {
  //                 setHighScore(score);
  //             }
  //             setScore(0);
  //             setClicked([]);
  //         } else {
  //             setScore(score + 1);
  //             setClicked([...clicked, name]);
  //         }
  //     shuffleCards();
  // }

  return (
    <>
      <div className={"grid-wrapper"}>
        <div className={"card-grid"}>{cardList}</div>
      </div>
    </>
  );
}
