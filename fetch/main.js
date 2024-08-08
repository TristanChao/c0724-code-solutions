'use strict';
async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/579');
    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchPokemon();
