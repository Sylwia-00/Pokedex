interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;

	setPokemonIndex: (index: number) => void;

	pokemonList: Pokemon[];
}

const NavBar = ({
	pokemonIndex,
	setPokemonIndex,
	pokemonList,
}: NavBarProps) => {
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

export default NavBar;
