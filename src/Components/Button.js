import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { NavigateNext } from "@mui/icons-material/";
import { NavigateBefore } from "@mui/icons-material/";
function IconButtons({ direction, onclick, itemsLength, pokemonName }) {
	pokemonName = parseInt(pokemonName);
	return (
		<IconButton
			aria-label="navigate"
			size="large"
			color="primary"
			style={{
				position: "absolute",
				top: "100%",
				right: direction === "next" ? "0" : "auto",
				left: direction === "previous" ? "0" : "auto",
			}}
			onClick={() => {
				direction === "next"
					? onclick((prev) => parseInt(prev) + 1)
					: onclick((prev) => parseInt(prev) - 1);
			}}
			disabled={
				direction === "next" && itemsLength <= pokemonName
					? true
					: direction === "previous" && pokemonName === 1
					? true
					: false
			}
		>
			{direction === "next" ? <NavigateNext /> : <NavigateBefore />}
		</IconButton>
	);
}
export default React.memo(IconButtons);
