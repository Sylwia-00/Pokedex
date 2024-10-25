interface Pokemon {
	name: string;

	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;

	setPokemonIndex: (index: number) => void;

	pokemonList: Pokemon[];
}

const NavBar = ({ pokemonIndex, setPokemonIndex }) => {
	const bouttonPrecedent = () => {
		if (pokemonIndex > 0) setPokemonIndex(pokemonIndex - 1);
	};
	const bouttonSuivant = () => {
		if (pokemonIndex < pokemonList.length - 1)
			setPokemonIndex(pokemonIndex + 1);
	};

	return (
		<nav>
			<button type="button" onClick={bouttonPrecedent}>
				Précédent
			</button>

			<button type="button" onClick={bouttonSuivant}>
				Suivant
			</button>
		</nav>
	);
};

// function App(pokemonIndex) {
// 	const [pokemonIndex, setPokemonIndex] = useState(0);

// 	const bouttonPrecedent = () => {
// 		if (pokemonIndex > 0) setPokemonIndex(pokemonIndex - 1);
// 	};
// 	const bouttonSuivant = () => {
// 		if (pokemonIndex < pokemonList.length - 1)
// 			setPokemonIndex(pokemonIndex + 1);
// 	};

// 	return (
// 		<div>
// 			<PokemonCard pokemon={pokemonList[pokemonIndex]} />

// 			{pokemonIndex > 0 && (
// 				<button type="button" onClick={bouttonPrecedent}>
// 					Précédent
// 				</button>
// 			)}
// 			{pokemonIndex < pokemonList.length - 1 && (
// 				<button type="button" onClick={bouttonSuivant}>
// 					Suivant
// 				</button>
// 			)}
// 		</div>
// 	);
// }

export default NavBar;
