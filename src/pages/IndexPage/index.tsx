/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// imported components
import ProductCard from "../../components/ProductCard";
import FeaturedCard from "../../components/FeaturedCard";
import MenuItem from "../../components/MenuItem";

// styled components
import StyledPage from "./style";

function IndexPage() {
  const [categories, setCategories] = useState([""]);
  const [categoryView, setCategoryView] = useState("home");
  const [products, setProducts] = useState([""]);
  const [discover, setDiscover] = useState([""]);
  const [homeSelected, setHomeSelected] = useState(true);

  const setupCategories = (arr) => {
    let tempArr: string[] = [];
    let uniqueArr: string[] = [];
    arr.map((i) => {
      return tempArr.push(i.category);
    });
    uniqueArr = tempArr.filter((i, pos) => {
      return tempArr.indexOf(i) === pos;
    });
    setCategories(uniqueArr);
  };

  const randomDiscover = (arr) => {
    let tempArr: string[] = [];
    tempArr.push(arr[Math.floor(Math.random() * arr.length)]);
    tempArr.push(arr[Math.floor(Math.random() * arr.length)]);
    setDiscover(tempArr);
  };

  const handleClickMenuItem = (i) => {
    setCategoryView(i);
    setHomeSelected(false);
    fetch(`https://fakestoreapi.com/products/category/${i}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  const handleClickHomeMenuItem = () => {
    setCategoryView("home");
    setHomeSelected(true);
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setupCategories(res);
        setProducts(res);
        randomDiscover(res);
      });
  }, []);

  return (
    <StyledPage
      style={{
        maxWidth: "100%",
        height: "100vh",
        display: "grid",
        gridTemplateAreas: `
        "header     header      header        header"
        ".          .           .             ."
        ".          discover    discover      ."
        ".          .           .             ."
        ".          featured    featured      ."     
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
          <MenuItem
            label={"home"}
            selected={homeSelected}
            onClick={() => {
              handleClickHomeMenuItem();
            }}
          />
          {categories.map((i) => {
            return (
              <MenuItem
                label={i}
                selected={categoryView === i}
                onClick={() => handleClickMenuItem(i)}
              />
            );
          })}
        </div>
      </header>
      <section className="sectionProductCard">
        <h2>DISCOVER</h2>
        <div>
          {discover.map((i: any) => {
            return <ProductCard detail={false} product={i} />;
          })}
        </div>
      </section>
      <section className="sectionFeaturedCard">
        <h2>FEATURED</h2>
        <div>
          {products.map((i: any) => {
            return i.category === categoryView ? (
              <FeaturedCard featured={i} />
            ) : categoryView === "home" ? (
              <FeaturedCard featured={i} />
            ) : (
              ""
            );
          })}
        </div>
      </section>
    </StyledPage>
  );
}

export default IndexPage;
