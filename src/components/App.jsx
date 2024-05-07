import {useEffect, useState} from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../styles/App.css";
import {Navbar} from "./Navbar.jsx";
import {DataHandler} from "./DataHandler.jsx";
import {Grid} from "./Grid.jsx";
import {Cart} from "./Cart.jsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Home.jsx";
export function App(){

    //todo add remove item to cart
    //todo add total price to cart
    //todo add counter to cart
    //todo style cart page
        const [cart, setCart] = useState([]);
    return(
        <>
        <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart}/>} />
            <Route path="/cart" element={<Cart currentCart={cart}/>} />
        </Routes>
        </>
    )

}