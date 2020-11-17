import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import { Typography, Card, Button, Hidden } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	card: {
		width: 700,
		height: 194,
		boxShadow: theme.shadows[10],
		borderRadius: 10,
		[theme.breakpoints.down("sm")]: {
			width: 361,
			height: 337,
		},
	},
	img: {
		maxWidth: 246,
		maxHeight: 128,
		marginLeft: 20,
		marginTop: 28,
		[theme.breakpoints.down("sm")]: {
			maxWidth: 246,
			maxHeight: 128,
			marginLeft: 0,
		},
	},
	title: {
		width: 175,
		height: 58,
		marginTop: 19,
		fontWeight: 700,
		fontSize: 21,
		overflow: "hidden",
		textOverflow: "ellipsis",
		display: "-webkit-box",
		WebkitLineClamp: 2,
		WebkitBoxOrient: "vertical",
		[theme.breakpoints.down("sm")]: {
			width: 284,
			maxHeight: 128,
			marginBottom: 15,
		},
	},
	redButton: {
		width: 121,
		height: 54,
		borderRadius: 10,
		color: "#fff",
		marginRight: 20,
		backgroundColor: "#ee707e",
		"&:hover": {
			backgroundColor: "#f18c97",
		},
	},
	blueButton: {
		width: 121,
		height: 54,
		borderRadius: 10,
		color: "#fff",
		marginRight: 20,
		backgroundColor: "#619CEB",
		"&:hover": {
			backgroundColor: "#80afef",
		},
	},
	description: {
		fontWeight: 500,
		fontSize: 14,
		marginRight: 20,
		marginTop: 15,
		color: "#a8a4a4",
		overflow: "hidden",
		textOverflow: "ellipsis",
		display: "-webkit-box",
		WebkitLineClamp: 4,
		WebkitBoxOrient: "vertical",
	},
}));

export default function DiscoverCard({ title, description, image, setProductId, productId }) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));

	return (
		<Grid item>
			<Card className={classes.card}>
				<Grid
					item
					container
					direction={matchesSM ? "column" : "row"}
					justify="center"
					alignItems="center"
				>
					<Grid item xs={matchesSM ? undefined : 5}>
						<img src={image} className={classes.img} alt={title} />
					</Grid>
					<Grid item xs={matchesSM ? undefined : 7}>
						<Grid
							item
							container
							justify={matchesSM ? "center" : "space-between"}
							alignItems="center"
						>
							<Typography className={classes.title}>{title}</Typography>

							<Button
								className={
									title === "Solid Gold Petite Micropave "
										? classes.redButton
										: classes.blueButton
								}
								component={Link}
								variant="contained"
								onClick={() => setProductId(productId)}
								to={`/product/${productId}`}
							>
								shop
							</Button>
						</Grid>
						<Hidden only={["sm", "xs"]}>
							<Grid item>
								<Typography className={classes.description}>
									{description}
								</Typography>
							</Grid>
						</Hidden>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
}
