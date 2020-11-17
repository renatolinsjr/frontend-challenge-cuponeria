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

  useEffect(() => {
    var slider = document.getElementById("slider"),
      sliderItems = document.getElementById("slides"),
      prev = document.getElementById("prev"),
      next = document.getElementById("next");

    function slide(wrapper, items, prev, next) {
      items.style.left = "0px";

      var posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slides = items.getElementsByClassName("slide"),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName("slide")[0] ? items.getElementsByClassName("slide")[0].offsetWidth : "252px",
        index = 0,
        allowShift = true;

      // Clone first and last slide
      wrapper.classList.add("loaded");

      // Mouse events
      items.onmousedown = dragStart;

      // Touch events
      items.addEventListener("touchstart", dragStart);
      items.addEventListener("touchend", dragEnd);
      items.addEventListener("touchmove", dragAction);

      // Transition events
      items.addEventListener("transitionend", checkIndex);

      function dragStart(e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = items.offsetLeft;

        if (e.type === "touchstart") {
          posX1 = e.touches[0].clientX;
        } else {
          posX1 = e.clientX;
          document.onmouseup = dragEnd;
          document.onmousemove = dragAction;
        }
      }

      function dragAction(e) {
        e = e || window.event;

        if (e.type === "touchmove") {
          posX2 = posX1 - e.touches[0].clientX;
          posX1 = e.touches[0].clientX;
        } else {
          posX2 = posX1 - e.clientX;
          posX1 = e.clientX;
        }
        items.style.left = items.offsetLeft - posX2 + "px";
      }

      function dragEnd(e) {
        posFinal = items.offsetLeft;
        if (posFinal - posInitial < -threshold) {
          shiftSlide(1, "drag");
        } else if (posFinal - posInitial > threshold) {
          shiftSlide(-1, "drag");
        } else {
          items.style.left = posInitial + "px";
        }

        document.onmouseup = null;
        document.onmousemove = null;
      }

      function shiftSlide(dir, action) {
        items.classList.add("shifting");

        if (allowShift) {
          if (!action) {
            posInitial = items.offsetLeft;
          }

          if (dir === 1) {
            items.style.left = posInitial - slideSize + "px";
            index++;
          } else if (dir === -1) {
            items.style.left = posInitial + slideSize + "px";
            index--;
          }
        }

        console.log(index, items.style.left);

        allowShift = false;
      }

      function checkIndex() {
        items.classList.remove("shifting");

        if (index === -1) {
          items.style.left = items.offsetLeft + "px";
          index = slidesLength - 1;
        }

        if (index === slidesLength) {
          items.style.left = items.offsetLeft + "px";
          index = 0;
        }

        allowShift = true;
      }
    }

    slide(slider, sliderItems, prev, next);


  });

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
        <div id="slider" className="slider">
          <div className="wrapper">
            <div id="slides" className="slides">
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
          </div>
        </div>
      </section>
    </StyledPage>
  );
}

export default IndexPage;
