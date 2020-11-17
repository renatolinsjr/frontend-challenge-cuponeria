import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// imported components
import ProductCard from "../../components/ProductCard";
import MenuItem from "../../components/MenuItem";

// styled components
import StyledPage from "./style";

export interface Props {
  detailed: boolean;
  product?: string;
}

function IndexPage() {
  const router = useParams();
  const [product, setProduct] = useState({
    id: "",
    title: "default",
    image: "default",
    description: "default",
    price: ""
  });

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${router.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <StyledPage
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        gridTemplateAreas: `
        "header     header      header      header"
        ".          .           .           ."
        ".          discover    discover    ."
        ".          .           .           ."
        ".          featured    featured    ."     
        `,
        gridTemplateRows: "6fr 1fr 6fr 2fr 6fr",
        gridTemplateColumns: "1fr 15fr 15fr 1fr",
        gridRowGap: 0,
      }}
    >
      <header>
        <div>
          <img src="./image/logo.png" alt="Logo Cuponeria" />
          <span>
            <h1>CUPONERIA STORE</h1>
          </span>
        </div>
        <div>
          <Link to="/" style={{ margin: "auto", textDecoration: "unset" }}>
            <MenuItem detail={true} />
          </Link>
        </div>
      </header>
      <section className="sectionProductCard">
        <h2>DETALHES</h2>
        <div>
          <ProductCard detail={true} product={product} />
        </div>
      </section>
    </StyledPage>
  );
}

export default IndexPage;
