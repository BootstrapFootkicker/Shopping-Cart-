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


    const [cart, setCart] = useState([]);
    const[cartQty, setCartQty] = useState(0);

useEffect(() => {
    let total = 0;
    cart.forEach(item => {
        total += Number(item.qty);
    });
    setCartQty(total);
    console.log(cartQty);
}, [cart]);

    return(
        <>
        <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} cartQty={cartQty}/>} />
            <Route path="/cart" element={<Cart currentCart={cart} setCart={setCart} cartQty={cartQty} setCartQty={setCartQty}/>} />
        </Routes>
        </>
    )

}