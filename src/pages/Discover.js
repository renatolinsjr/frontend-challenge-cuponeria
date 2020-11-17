import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import { Typography, Card } from "@material-ui/core";

import CircularProgress from "@material-ui/core/CircularProgress";
import DiscoverCard from "../components/DiscoverCard";
import api from "../api/api";

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: "7em",
	},
	discover: {
		fontWeight: 700,
		fontSize: 35,
	},
	productsContainer: {
		maxWidth: "100em",
	},
	productCard: {
		width: 252,
		height: 366,
		marginBottom: 50,
		marginLeft: 20,
		borderRadius: 15,
	},
	productImg: {
		maxWidth: 200,
		height: 258,
	},
	productTitle: {
		backgroundColor: "#111",
		color: "#fff",
		height: "100%",
	},
	productTitleText: {
		fontWeight: 700,
		fontSize: 16,
		overflow: "hidden",
		textOverflow: "ellipsis",
		display: "-webkit-box",
		WebkitLineClamp: 2,
		WebkitBoxOrient: "vertical",
	},
	priceCard: {
		backgroundColor: "#ff0000",
		color: "#fff",
		width: 85,
		height: 28,
		borderRadius: 10,
		marginBottom: 20,
	},
}));

export default function Discover({ filter, setProductId }) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));

	const [loading, setLoading] = useState(false);
	const [micropave, setMicropave] = useState({});
	const [ssd, setSsd] = useState({});
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getMicropave() {
			try {
				const { data } = await api.get("/products/6");
				setMicropave(data);
			} catch (error) {
				alert("Ocorreu um erro ao buscar os items");
			}
		}
		getMicropave();
	}, []);

	useEffect(() => {
		async function getSsd() {
			try {
				const { data } = await api.get("/products/10");
				setSsd(data);
			} catch (error) {
				alert("Ocorreu um erro ao buscar os items");
			}
		}
		getSsd();
	}, []);

	useEffect(() => {
		async function getProducts() {
			try {
				const { data } = await api.get(filter);
				setProducts(data);
			} catch (error) {
				alert("Ocorreu um erro ao buscar os items");
			}
		}
		getProducts();
		setLoading(true);
	}, [filter]);

	const allProducts = products.map(product => {
		return (
			<Grid item>
				<Card className={classes.productCard}>
					<Grid
						item
						container
						justify="center"
						alignItems="center"
						component={Link}
						variant="contained"
						to={`/product/${product.id}`}
						onClick={() => setProductId(product.id)}
						style={{
							textDecoration: "none",
						}}
					>
						<Grid item>
							<img
								src={product.image}
								className={classes.productImg}
								alt={product.title}
							/>
							<Grid
								item
								container
								justify="flex-end"
								align="center"
								alignItems="center"
							>
								<Card className={classes.priceCard}>R${product.price}</Card>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						container
						justify="center"
						align="center"
						className={classes.productTitle}
					>
						<Grid item>
							<Typography className={classes.productTitleText}>
								{product.title}
							</Typography>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		);
	});

	return (
		<Grid item container justify="center" alignItems="center" className={classes.root}>
			{loading ? (
				<>
					<Grid item container justify="center" spacing={2} style={{ marginBottom: 60 }}>
						<Grid
							item
							container
							direction={matchesSM ? "column" : "row"}
							justify="center"
						>
							<Typography className={classes.discover}>Discover</Typography>
						</Grid>

						<DiscoverCard
							title={micropave.title}
							description={micropave.description}
							image={micropave.image}
							productId={micropave.id}
							setProductId={setProductId}
						/>
						<DiscoverCard
							title={ssd.title}
							description={ssd.description}
							image={ssd.image}
							productId={ssd.id}
							setProductId={setProductId}
						/>
					</Grid>

					<Grid
						item
						container
						justify="center"
						alignItems="center"
						className={classes.productsContainer}
					>
						{allProducts}
					</Grid>
				</>
			) : (
				<CircularProgress />
			)}
		</Grid>
	);
}
