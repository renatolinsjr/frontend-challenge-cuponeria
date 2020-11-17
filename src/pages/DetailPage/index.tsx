import React from "react";
import { Link } from "react-router-dom";

// imported components
import ProductCard from "../../components/ProductCard";
import MenuItem from "../../components/MenuItem";

// styled components
import StyledPage from "./style";

export interface Props {
  detailed: boolean;
}

function IndexPage() {
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
          <ProductCard detail={true} />
        </div>
      </section>
    </StyledPage>
  );
}

export default IndexPage;
