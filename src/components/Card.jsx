import "..//styles/card.css";

export function Card({image, name, price, eventTrigger}) {
    return (
        <div className={"card"}>
                <div className={"product-image-container"}>
                    <img className={"product-image"} src={image} alt="pokemon"/>
                </div>
            <div className={"card-info-container"}>
                <h1>{name}</h1>
                <span className={"price-text"}>${parseFloat(price).toFixed(2)}</span>
                <button onClick={() => eventTrigger(name)}>Add To Cart</button>
            </div>
        </div>
    );
}
