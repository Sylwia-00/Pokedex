import "./App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	return (
		<div>
			<PokemonCard
				imgSrc={pokemonList[pokemonIndex].imgSrc}
				name={pokemonList[pokemonIndex].name}
			/>
			<NavBar
				pokemonIndex={pokemonIndex}
				setPokemonIndex={setPokemonIndex}
				pokemonList={pokemonList}
			/>
		</div>
	);
}

const pokemonList = [
	{
		name: "bulbasaur",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},

	{
		name: "mew",
	},
	{
		name: "charmander",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},

	{
		name: "squirtle",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},

	{
		name: "pikachu",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
];

export default App;
