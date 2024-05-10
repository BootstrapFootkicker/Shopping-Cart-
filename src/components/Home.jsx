import {DataHandler} from "./DataHandler.jsx";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./Cart.jsx";
import {Navbar} from "./Navbar.jsx";
import {Grid} from "./Grid.jsx";

export function Home({cart, setCart,cartQty}) {


    const dataHandler = DataHandler();
    // const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <>
            <Navbar cartQty={cartQty}/>
            <Grid productData={dataHandler} setCart={setCart} cart={cart} />
        </>
    );
}