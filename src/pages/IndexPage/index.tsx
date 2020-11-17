import React from "react";

// imported components
import ProductCard from "../../components/ProductCard";
import FeaturedCard from "../../components/FeaturedCard";
import MenuItem from "../../components/MenuItem";

// styled components
import StyledPage from "./style";

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
          <MenuItem />
        </div>
      </header>
      <section className="sectionProductCard">
        <h2>DISCOVER</h2>
        <div>
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <section className="sectionFeaturedCard">
        <h2>FEATURED</h2>
        <div>
          <FeaturedCard />
        </div>
      </section>
    </StyledPage>
  );
}

export default IndexPage;
