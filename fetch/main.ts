interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchPokemon(): Promise<void> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/579');

    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }

    const data = (await response.json()) as Pokemon;

    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchPokemon();
