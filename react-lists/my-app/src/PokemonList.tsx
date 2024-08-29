type Props = {
  pokedex: { number: string; name: string }[];
};

export function PokemonList({ pokedex }: Props) {
  const pokemonListItems = pokedex.map((pokemon) => (
    <li key={pokemon.number.toString()}>{pokemon.name}</li>
  ));

  return <ul>{pokemonListItems}</ul>;
}
