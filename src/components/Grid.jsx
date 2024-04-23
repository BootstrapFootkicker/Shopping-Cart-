import "..//styles/grid.css";
import {Card} from "./Card.jsx";
import {Header} from "./Header.jsx";
import { useState, useEffect } from "react";

export function Grid({pokemonData}) {
    const [cardList, setCardList] = useState([]);
    const [shuffledData, setShuffledData] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const[clicked, setClicked] = useState([]);

    //shuffles the cards on mount and when the pokemon data changes
    useEffect(() => {
        shuffleCards();
    }, [pokemonData]);

    useEffect(() => {
        //maps the pokemon data to the card component
        const newCardList = shuffledData.map((pokemon, index) => {
            return (
                <Card
                    key={index}
                    sprite={pokemon.sprites.front_default}
                    name={pokemon.name}
                    types={pokemon.types}
                    eventTrigger={cardClick}
                />
            );
        });

        setCardList(newCardList);
    }, [shuffledData]);
    function cardClick(name) {
            if (clicked.includes(name)) {
                if (score > highScore) {
                    setHighScore(score);
                }
                setScore(0);
                setClicked([]);
            } else {
                setScore(score + 1);
                setClicked([...clicked, name]);
            }
        shuffleCards();
    }
    function shuffleCards() {
        const shuffled = [...pokemonData];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledData(shuffled);
        console.log("shuffled");
    }

    return (
        <>
            <Header currentScore={score} highScore={highScore}/>
            <div className={"grid-wrapper"}>
                <div className={"card-grid"}>
                    {cardList}
                </div>
            </div>
        </>
    );
}