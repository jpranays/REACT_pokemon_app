import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function BasicSelect({ list: pokemon, currentPokemon, onselect }) {
	const handleChange = (event) => {
		onselect(event.target.value);
	};

	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Pokemon</InputLabel>
			<Select value={currentPokemon} label="Pokemon" onChange={handleChange}>
				{pokemon.length
					? pokemon.map(({ name, url }) => (
							<MenuItem
								value={
									url.split("/").filter(Boolean).slice(-1)[0] || currentPokemon
								}
								key={name}
							>
								{name}
							</MenuItem>
					  ))
					: null}
			</Select>
		</FormControl>
	);
}
export default React.memo(BasicSelect);
