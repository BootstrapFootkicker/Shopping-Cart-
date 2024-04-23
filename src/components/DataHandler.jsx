import axios from "axios";
import { useEffect, useState } from "react";

export function DataHandler() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    //gets first 10 pokemon name data from the pokeapi
    const loadPokemon = async () => {
      const pokemonNames = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10",

      );

      //uses pokemon name data to get the pokemon data i.e. sprite, name, types
      const pokemonPull = await Promise.all(
        pokemonNames.data.results.map(async (pokemon) => {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
          );
          return response.data;
        }),


      );

      setPokemonData(pokemonPull);
    };

    //runs the loadPokemon function so data is available on mount
    loadPokemon();
  }, []);


  return pokemonData;
}
