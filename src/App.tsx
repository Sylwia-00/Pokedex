import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	const bouttonPrecedent = () => {
		if (pokemonIndex > 0) setPokemonIndex(pokemonIndex - 1);
	};
	const bouttonSuivant = () => {
		if (pokemonIndex < pokemonList.length - 1)
			setPokemonIndex(pokemonIndex + 1);
	};

	return (
		<div>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />

			{pokemonIndex > 0 && (
				<button type="button" onClick={bouttonPrecedent}>
					Précédent
				</button>
			)}
			{pokemonIndex < pokemonList.length - 1 && (
				<button type="button" onClick={bouttonSuivant}>
					Suivant
				</button>
			)}
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
