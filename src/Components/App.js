import React, { useEffect, useState } from "react";
import MultipleSelect from "./DropDown";
import NavigateButton from "./Button";
import PokemonCard from "./Card";
import Loader from "./Loading";
import { getPokemonDescription, getPokemonList } from "../api";
function App() {
	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState([]);
	const [pokemonDecription, setPokemonDescription] = useState("");
	const [pokemonName, setPokemonName] = useState(1);

	useEffect(() => {
		setLoading(true);
		Promise.all([getPokemonList()])
			.then(([pokemonList]) => {
				setPokemon(pokemonList);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		setLoading(true);
		getPokemonDescription(pokemonName)
			.then((res) => {
				setPokemonDescription(res);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, [pokemonName]);

	return (
		<>
			{loading === true && <Loader loading />}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
					position: "relative",
				}}
			>
				<MultipleSelect
					list={pokemon}
					onselect={setPokemonName}
					currentPokemon={pokemonName}
				/>
				<NavigateButton
					direction="next"
					onclick={setPokemonName}
					itemsLength={pokemon.length}
					pokemonName={pokemonName}
				/>
				<NavigateButton
					direction="previous"
					onclick={setPokemonName}
					itemsLength={pokemon.length}
					pokemonName={pokemonName}
				/>
				<PokemonCard
					pokemonDecription={pokemonDecription}
					pokemonName={pokemonName}
					selectedPokemon={pokemon.length ? pokemon[pokemonName - 1].name : ""}
				/>
			</div>
		</>
	);
}

export default App;
