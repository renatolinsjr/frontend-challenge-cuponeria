import React from "react";
import styled from "styled-components";

export interface Props {
  detail?: boolean;
  product?: object;
}

const StyledProductCard = styled.div`
  background: rgba(200, 118, 118, 0.2);
  height: 184px;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    margin: 28px 20px;
    max-width: 250px;
  }

  div {
    display: flex;
    flex-direction: column;
    min-width: 50%;

    div:first-child {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 26px;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 14px 12px;
        height: 51px;
        width: 121px;
        /* position: relative;
        right: 0px;
        top: 0px; */
        border-radius: 10px;
        background: #ee797e;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.110058);

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #ffffff;
      }
    }

    div:nth-child(2) {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      /* or 121% */

      color: #a8a4a4;

      p {
        margin: auto 27px auto auto;
      }
    }
  }
`;

const ProductCard = ({
  detail = false,
  product = { title: "default", image: "default", description: "default" },
}) => {
  return (
    <StyledProductCard>
      <img alt="" src={product.image} />
      <div>
        <div>
          <p>
            {detail
              ? product.title
              : product.title
              ? product.title.substring(0, 25)+"..."
              : ""}
          </p>
          <span>{detail ? " " : "SHOP"}</span>
        </div>
        <div>
          <p>
            {detail
              ? product.description
              : product.description
              ? product.description.substring(0, 100)+"..."
              : ""}
          </p>
        </div>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
