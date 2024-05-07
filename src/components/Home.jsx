import {DataHandler} from "./DataHandler.jsx";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./Cart.jsx";
import {Navbar} from "./Navbar.jsx";
import {Grid} from "./Grid.jsx";

export function Home({cart, setCart}) {


    const dataHandler = DataHandler();
    // const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <>
            <Navbar/>
            <Grid productData={dataHandler} setCart={setCart} cart={cart} />
        </>
    );
}