import React from "react";
import styled from "styled-components";

const StyledFeaturedCard = styled.div`
  width: 252px;
  height: 366px;

  div:first-child {
    position: relative;
    height: 315px;
    width: 252px;

    background: #ffffff;
    border-radius: 10px 10px 0px 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 90%;
      max-height: 90%;
    }

    span {
      position: absolute;
      right: 10px;
      bottom: 10px;

      height: 36px;
      width: 85px;

      background: #ff0000;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.110058);
      border-radius: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
      }
    }
  }

  div:nth-child(2) {
    height: 51px;
    width: 252px;
    left: 0px;
    top: 315px;

    background: #111111;
    border-radius: 0px 0px 10px 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: auto 1.9rem;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
    }
  }
`;

export interface Props {
  featured?: object;
}

const FeaturedCard = ({
  featured = { title: "default", image: "default", price: "" },
}) => {
  return (
    <StyledFeaturedCard>
      <div>
        <img src={featured.image} alt="" />
        <span>
          <p>$ {featured.price}</p>
        </span>
      </div>
      <div>
        <p>{featured.title}</p>
      </div>
    </StyledFeaturedCard>
  );
};

export default FeaturedCard;
