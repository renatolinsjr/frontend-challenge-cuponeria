import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import ProductModal from "./components/ProductModal";
import ThreeDotsWave from "./components/ThreeDotsWave";
import { FlexCenter } from "./utils/HelperStyles";
import { motion } from "framer-motion";
import ProductCard from "./components/ProductCard";
import Discover from "./components/Discover";
import { Product } from "./utils/Types";

const Root = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background: white;
`;

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #353535;
  ${FlexCenter}
`;

const Products = styled.div`
  ${FlexCenter}
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

async function getCategories() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.status === 200) {
      const products = await response.json();
      let categories: String[] = [];

      products.forEach((product: Product) => {
        categories.indexOf(product.category) === -1 &&
          categories.push(product.category);
      });

      return categories;
    } else {
      return false;
    }
  } catch (err) {
    console.log("Error: ", err);
    return false;
  }
}

async function getProducts(category: string) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${
        category !== "" ? "category" : ""
      }/${category}`
    );
    if (response.status === 200) {
      const products = await response.json();
      return products;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
}

function App() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<String[]>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      if (categories) {
        setCategories(categories);
        setLoadingProducts(false);
        setLoading(false);
      } else alert("Falha em realizar a requisição");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLoadingProducts(true);
      setProducts(await getProducts(category));
      setLoadingProducts(false);
    })();
  }, [category]);

  return (
    <>
      {loading ? (
        <Loading>
          <ThreeDotsWave />
        </Loading>
      ) : (
        <Root>
          <Header
            categories={categories}
            setCategory={(category: string) => {
              setCategory(category);
            }}
          ></Header>
          {loadingProducts ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ThreeDotsWave />
            </div>
          ) : (
            <>
              {products.length > 0 && category === "" && (
                <Discover
                  products={products}
                  select={(product: Product) => {
                    setProduct(product);
                    setShowModal(true);
                  }}
                />
              )}

              <Products>
                {products &&
                  products.map((product: Product, index: number) => {
                    return (
                      <ProductCard
                        key={index}
                        product={product}
                        select={() => {
                          setProduct(product);
                          setShowModal(true);
                        }}
                      />
                    );
                  })}
              </Products>
            </>
          )}

          {product && (
            <ProductModal
              closeModal={() => {
                setShowModal(false);
                setProduct(undefined);
              }}
              product={product}
              showModal={showModal}
            />
          )}
        </Root>
      )}
    </>
  );
}

export default App;
