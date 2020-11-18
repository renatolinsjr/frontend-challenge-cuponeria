import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

export interface Props {
  featured?: {
    id: "";
    title: "Mens Casual Slim Fit";
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg";
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.";
    price: "15.99";
  };
}

const StyledFeaturedCard = styled.div`
  width: 252px;
  height: 366px;

  div:first-child {
    position: relative;
    height: 315px;
    width: 252px;
    cursor: pointer;

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
      margin: auto 1rem;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
    }
  }
`;

const FeaturedCard = ({
  featured = {
    id: "",
    title: "Mens Casual Slim Fit",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    price: "15.99",
  },
}) => {
  return (
    <Router>
      <StyledFeaturedCard className="slide">
        <Link to={`/${featured.id}`}>
          <div>
            <img src={featured.image} alt="" />
            <span>
              <p>$ {featured.price}</p>
            </span>
          </div>
        </Link>
        <div>
          <p>{featured.title ? featured.title.substring(0, 52) : ""}</p>
        </div>
      </StyledFeaturedCard>
    </Router>
  );
};

export default FeaturedCard;
