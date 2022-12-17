import axios from "axios";
//get pokemon list
const apiUrl = "https://pokeapi.co/api/v2";
async function getPokemonList() {
	const {
		data: { results },
	} = await axios.get(`${apiUrl}/pokemon/?offset=0&limit=150`, {});
	return results;
}
//get pokemon description
async function getPokemonDescription(pokemonName) {
	const {
		data: {
			flavor_text_entries: [{ flavor_text }],
		},
	} = await axios.get(`${apiUrl}/pokemon-species/${pokemonName}`, {
		timeout: 500,
	});
	return flavor_text;
}
//get pokemon image
async function getPokemonImage(pokemonName) {
	return await fetch(
		`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonName}.png`
	);
}
export { getPokemonList, getPokemonDescription, getPokemonImage };
