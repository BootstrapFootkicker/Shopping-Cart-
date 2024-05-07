import "..//styles/grid.css";
import {Card} from "./Card.jsx";
import {useState, useEffect} from "react";

export function Grid({productData,cart,setCart}) {
    const [cardList, setCardList] = useState([]);


    useEffect(() => {
        const newCardList = productData.map((product, index) => (
            <Card
                key={index}
                image={product.image}
                name={product.title}
                price={product.price}
                eventTrigger={addToCart}
            />
        ));
        setCardList(newCardList);
    }, [productData]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

   function addToCart(productName, image, price,qty) {
       qty = parseInt(qty);
    let newProduct = {
        name: productName,
        image: image,
        price: price,
        qty: qty
    }
    setCart(prevCart => {
        if (prevCart.some(product => product.name === productName)) {
            return prevCart.map(product => {
                if (product.name === productName) {
                    return {...product, qty: product.qty + qty};
                } else {
                    return product;
                }
            });
        } else {
            console.log(`Added ${productName} to cart`);
            return [...prevCart, newProduct];
        }
    });
}

    return (
        <>
            <div className={"grid-wrapper"}>
                <div className={"card-grid"}>{cardList}</div>
            </div>
        </>
    );
}
