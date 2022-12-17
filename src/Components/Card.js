import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ActionAreaCard({ pokemonDesription, pokemonName, selectedPokemon }) {
	return (
		<Card
			style={{
				padding: "50px 0 25px 0",
				backgroundColor: "white",
				borderRadius: "10px",
				marginTop: "100px",
				width: "300px",
			}}
		>
			<CardActionArea
				style={{
					pointerEvents: "none",
				}}
			>
				<CardMedia
					component="img"
					height="200"
					image={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/${pokemonName}.png`}
					alt="green iguana"
					style={{
						borderRadius: "50%",
						border: "1px solid grey",
						width: "200px",
						margin: "auto",
					}}
				/>
				<CardContent
					style={{
						textAlign: "center",
					}}
				>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						fontWeight={"bold"}
					>
						{selectedPokemon}
					</Typography>
					<Typography variant="body2" color="InfoText">
						{pokemonDesription}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
export default React.memo(ActionAreaCard);
