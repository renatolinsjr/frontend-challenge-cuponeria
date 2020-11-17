import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import { Typography, Card, Button, Hidden } from "@material-ui/core";

import api from "../api/api";

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: "7em",
	},
	card: {
		width: 1250,
		height: 439,
		boxShadow: theme.shadows[10],
		borderRadius: 10,
		[theme.breakpoints.down("md")]: {
			width: 945,
		},
		[theme.breakpoints.down("sm")]: {
			width: 361,
			height: 961,
			marginTop: 30,
		},
	},
	img: {
		maxWidth: 494,
		maxHeight: 346,
		marginTop: 28,
		[theme.breakpoints.down("md")]: {
			maxWidth: 310,
			maxHeight: 322,
		},
		[theme.breakpoints.down("sm")]: {
			maxWidth: 217,
			maxHeight: 142,
		},
	},
	title: {
		width: 362,
		height: 110,
		marginTop: 19,
		marginBottom: 20,
		fontWeight: 700,
		fontSize: 30,
		[theme.breakpoints.down("sm")]: {
			marginTop: 0,
			marginBottom: 30,
			maxWidth: 260,
		},
	},
	button: {
		width: 251,
		height: 106,
		borderRadius: 10,
		color: "#fff",
		marginRight: 20,
		fontWeight: 700,
		fontSize: 24,
		backgroundColor: "#619CEB",
		"&:hover": {
			backgroundColor: "#80afef",
		},
		[theme.breakpoints.down("md")]: {
			width: 217,
			height: 36,
			marginRight: 0,
			marginTop: 25,
			marginBottom: 25,
		},
	},
	description: {
		fontWeight: 500,
		maxWidth: 680,
		size: 14,
		marginRight: 20,
		color: "#a8a4a4",
		marginTop: 45,
		[theme.breakpoints.down("sm")]: {
			marginRight: 0,
		},
	},
}));

export default function Product({ productId }) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));

	const [product, setProduct] = useState([]);

	useEffect(() => {
		async function getProduct() {
			try {
				const { data } = await api.get(`/products/${productId}`);
				setProduct(data);
			} catch (error) {
				alert("Ocorreu um erro ao buscar os items");
			}
		}
		getProduct();
	}, []);

	return (
		<Grid
			item
			container
			direction="column"
			justify="center"
			alignItems="center"
			className={classes.root}
		>
			<Card className={classes.card}>
				<Grid
					item
					container
					direction={matchesSM ? "column" : "row"}
					alignItems={matchesSM ? "center" : undefined}
					justify="space-between"
				>
					<Grid item xs={5}>
						<Grid item container justify="center">
							<img src={product.image} className={classes.img} alt={product.title} />
						</Grid>
					</Grid>
					<Grid item xs={7}>
						<Grid
							item
							container
							direction={matchesSM ? "column" : "row"}
							justify="space-between"
							alignItems={matchesSM ? undefined : "center"}
						>
							<Hidden mdUp>
								<Button className={classes.button}>R${product.price}</Button>
							</Hidden>
							<Typography className={classes.title}>{product.title}</Typography>

							<Hidden only={["sm", "xs"]}>
								<Button className={classes.button}>R${product.price}</Button>
							</Hidden>
						</Grid>
						<Grid item>
							<Typography className={classes.description}>
								{product.description}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
}
