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
	return (
		<nav>
			{pokemonList.map((pokemon) => (
				<button
					key={pokemon.id}
					onClick={() => setPokemonIndex(pokemon.id - 1)}
				>
					{pokemon.name}
				</button>
			))}
		</nav>
	);
};

export default NavBar;
