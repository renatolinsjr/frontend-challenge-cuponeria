import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Discover from "./pages/Discover";
import Product from "./pages/Product";

function App() {
	const [filter, setFilter] = useState("/products");
	const [productId, setProductId] = useState(0);

	return (
		<BrowserRouter>
			<Header setFilter={setFilter} productId={productId} setProductId={setProductId} />
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<Discover
							filter={filter}
							setProductId={setProductId}
							productId={productId}
						/>
					)}
				/>
				<Route exact path="/product/:id" render={() => <Product productId={productId} />} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
