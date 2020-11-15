import React from "react";
import styled from "styled-components";

const StyledProductCard = styled.div`
  background: rgba(200, 118, 118, 0.2);
  height: 184px;
  width: 659px;
  left: 0px;
  top: 0px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    margin: 28px 20px;
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

const ProductCard = () => {
  return (
    <StyledProductCard>
      <img alt="" src="/image/test/ringTest.png" />
      <div>
        <div>
          <p>Solid Gold Petite Micropave</p>
          <span>SHOP</span>
        </div>
        <div>
          <p>
            "Satisfaction Guaranteed. Return or exchange any order within 30
            days.Designed and sold by Hafeez Center in the United States.
            Satisfaction Guaranteed. Return or exchange any order within 30
            days."
          </p>
        </div>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
