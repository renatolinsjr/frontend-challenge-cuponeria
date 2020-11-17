import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
	Button,
	IconButton,
	SwipeableDrawer,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "../assets/icone 1.svg";

const useStyles = makeStyles(theme => ({
	logo: {
		width: 64,
		height: 64,
		[theme.breakpoints.down("sm")]: {
			width: 42,
			height: 42,
		},
	},
	title: {
		marginLeft: 10,
		width: 277,
		height: 35,
		[theme.breakpoints.down("sm")]: {
			width: 240,
			height: 35,
		},
	},
	button: {
		width: 316,
		height: 35,
		backgroundColor: "#fff",
		textTransform: "none",
		fontWeight: 700,
		fontSize: 16,
		marginTop: 20,
		marginBottom: 20,
		marginLeft: 15,
		fontStretch: 0,
		lineHeight: 1,
		"&:hover": {
			backgroundColor: "#b2b2b2",
		},
		[theme.breakpoints.down("sm")]: {
			maxWidth: 68,
			maxHeight: 51,
			marginLeft: 0,
		},
	},
}));

export default function Header({ setFilter, productId, setProductId }) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));

	const [openDrawer, setOpenDrawer] = useState(false);

	const handleFilterHome = () => {
		setFilter("/products");
		setOpenDrawer(false);
	};

	const handleFilterMen = () => {
		setFilter("/products/category/men%20clothing");
		setOpenDrawer(false);
	};

	const handleFilterWomen = () => {
		setFilter("/products/category/women%20clothing");
		setOpenDrawer(false);
	};
	const handleFilterElectronics = () => {
		setFilter("/products/category/electronics");
		setOpenDrawer(false);
	};
	const handleFilterJewelery = () => {
		setFilter("/products/category/jewelery");
		setOpenDrawer(false);
	};

	const tabs = (
		<>
			<Button className={classes.button} onClick={handleFilterHome}>
				Home
			</Button>
			<Button className={classes.button} onClick={handleFilterMen}>
				Men clothing
			</Button>
			<Button className={classes.button} onClick={handleFilterWomen}>
				Women clothing
			</Button>
			<Button className={classes.button} onClick={handleFilterElectronics}>
				Electronics
			</Button>
			<Button className={classes.button} onClick={handleFilterJewelery}>
				Jewelery
			</Button>
		</>
	);

	const drawer = (
		<>
			<SwipeableDrawer
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<div className={classes.toolbarMargin} />
				<List>
					<ListItem divider button onClick={handleFilterHome}>
						<ListItemText disableTypography>Home</ListItemText>
					</ListItem>

					<ListItem divider button onClick={handleFilterMen}>
						<ListItemText disableTypography>Men clothing</ListItemText>
					</ListItem>

					<ListItem divider button onClick={handleFilterWomen}>
						<ListItemText disableTypography>Women clothing</ListItemText>
					</ListItem>

					<ListItem divider button onClick={handleFilterElectronics}>
						<ListItemText disableTypography>Electronics</ListItemText>
					</ListItem>

					<ListItem divider button onClick={handleFilterJewelery}>
						<ListItemText disableTypography>Jewelery</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton
				className={classes.drawerIconContainer}
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
			>
				<MenuIcon style={{ color: "#fff" }} className={classes.drawerIcon} />
			</IconButton>
		</>
	);

	return (
		<Grid item>
			<AppBar position="fixed" style={{ backgroundColor: "#000" }}>
				<Toolbar className={classes.toolbar}>
					<Grid item container justify="space-between" alignItems="center">
						<Grid
							item
							container
							alignItems="center"
							component={Link}
							variant="contained"
							to={"/"}
							onClick={() => setProductId(0)}
							style={{
								textDecoration: "none",
								color: "#fff",
							}}
						>
							<img src={logo} alt="logo" className={classes.logo} />
							<Typography
								component="h1"
								variant="h6"
								color="inherit"
								noWrap
								className={classes.title}
							>
								Cuponeria Store
							</Typography>
						</Grid>
					</Grid>

					{productId === 0 ? (
						matchesSM ? (
							drawer
						) : (
							tabs
						)
					) : (
						<Button
							component={Link}
							variant="contained"
							to={"/"}
							onClick={() => setProductId(0)}
							className={classes.button}
						>
							Voltar
						</Button>
					)}

					{/* {matchesSM ? (
						drawer
					) : productId === 0 ? (
						<>
							<Button className={classes.button} onClick={handleFilterHome}>
								Home
							</Button>
							<Button className={classes.button} onClick={handleFilterMen}>
								Men clothing
							</Button>
							<Button className={classes.button} onClick={handleFilterWomen}>
								Women clothing
							</Button>
							<Button className={classes.button} onClick={handleFilterElectronics}>
								Electronics
							</Button>
							<Button className={classes.button} onClick={handleFilterJewelery}>
								Jewelery
							</Button>
						</>
					) : (
						<Button
							component={Link}
							variant="contained"
							to={"/"}
							onClick={() => setProductId(0)}
							className={classes.button}
						>
							Voltar
						</Button>
					)} */}
				</Toolbar>
			</AppBar>
		</Grid>
	);
}
