import "..//styles/card.css";
import {useState} from "react";

export function Card({image, name, price, eventTrigger}) {
         const [qty, setQty] = useState(1);
        const handleQtyChange = (e) => {
            setQty(e.target.value);
        }
    return (


        <div className={"card"}>
                <div className={"product-image-container"}>
                    <img className={"product-image"} src={image} alt="pokemon"/>
                </div>
            <div className={"card-info-container"}>
                <h1>{name}</h1>
                <span className={"price-text"}>${parseFloat(price).toFixed(2)}</span>
                <button onClick={() => eventTrigger(name,image,price,qty)}>Add To Cart</button>
                <input type="number" placeholder={"1"} min={"1"} max={"10"} value={qty} onChange={handleQtyChange}/>
            </div>
        </div>
    );
}
