import {useEffect, useState} from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../styles/App.css";
import {Navbar} from "./Navbar.jsx";
import {DataHandler} from "./DataHandler.jsx";
import {Grid} from "./Grid.jsx";

export function App() {


    const dataHandler = DataHandler();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <>
            <Navbar/>
            <Grid productData={dataHandler} />
        </>
    );
}
