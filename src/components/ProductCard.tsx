import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Colors, FlexCenter } from "../utils/HelperStyles";
import { Product } from "../utils/Types";

const Root = styled(motion.div)`
  width: 400px;
  height: 380px;
  background: white;
  ${FlexCenter}
  flex-direction: column;
  box-shadow: 0 0 5px #ccc;
  margin: 20px;
`;

const Infos = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 0.8fr 0.2fr;
  position: relative;
`;

const ImageDiv = styled.div`
  cursor: pointer;
  ${FlexCenter}
`;

const Image = styled.img`
  max-width: 214px;
  max-height: 271px;
  object-fit: cover;
`;

const Title = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  letter-spacing: 2px;
  padding: 0px 20px;
`;

const Price = styled.span`
  color: ${Colors.red};
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
`;

interface Props {
  product: Product;
  select: Function;
}

export default function ProductCard(props: Props) {
  const { product, select } = props;
  return (
    <Root whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Infos>
        <ImageDiv
          onClick={() => {
            select();
          }}
        >
          <Price>
            {props.product.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "BRL",
            })}
          </Price>
          <Image src={product.image} />
        </ImageDiv>

        <Title>{product.title}</Title>
      </Infos>
    </Root>
  );
}
