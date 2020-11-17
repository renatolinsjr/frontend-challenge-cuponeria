import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export interface Props {
  id?: string;
  detail?: boolean;
  product?: object;
}

const StyledProductCard = styled.div`
  background: rgba(200, 118, 118, 0.2);
  height: ${(props: Props) => (props.detail ? "500px" : "184px")};
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: 10px;
  margin-bottom: 2rem !important;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div.imgContainer {
    width: ${(props: Props) => (props.detail ? "50%" : "unset")};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin: ${(props: Props) => (props.detail ? "auto" : "28px 20px")};
      max-width: ${(props: Props) => (props.detail ? "500px" : "250px")};
      height: ${(props: Props) => (props.detail ? "346px" : "70%")};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    min-width: 40%;

    div:first-child {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: ${(props: Props) => (props.detail ? "30px" : "22px")};
        line-height: ${(props: Props) => (props.detail ? "35px" : "26px")};
      }

      div {
        margin: 0 0 14px 18px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        a {
          text-decoration: unset;
          margin-right: 0;
        }

        span {
          display: flex;
          justify-content: center;
          align-items: center;

          height: 51px;
          width: 121px;
          border-radius: 10px;
          background: #ee797e;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.110058);

          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: ${(props: Props) => (props.detail ? "24px" : "16px")};
          line-height: ${(props: Props) => (props.detail ? "28px" : "19px")};
          text-align: center;
          color: #ffffff;
        }
      }
    }

    div:nth-child(2) {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: ${(props: Props) => (props.detail ? "20px" : "14px")};
      line-height: ${(props: Props) => (props.detail ? "30px" : "17px")};
      /* or 121% */

      color: #a8a4a4;

      p {
        margin: auto 27px auto auto;
      }
    }
  }

  @media only screen and (max-width: 900px){
    height: ${(props: Props) => (props.detail ? "100%" : "184px")};
    flex-direction: ${(props: Props) => (props.detail ? "column" : "row")};

    div.imgContainer{
      width: ${(props: Props) => (props.detail ? "100%" : "unset")};
      margin: ${(props: Props) => (props.detail ? "2rem auto" : "unset")};
    }

    div:first-child{
      flex-direction: ${(props: Props) => (props.detail ? "column-reverse !important" : "row")};
    }

    p {
      text-align: center;
      margin: 2rem auto;
    }

    div:nth-child(2) > div:nth-child(2){
      p{
        padding-bottom: 2rem;
      }
    }
  }
`;

const ProductCard = ({
  detail = false,
  product = {
    id: "",
    title: "default",
    image: "default",
    description: "default",
    price: ""
  },
}) => {
  return (
    <StyledProductCard detail={detail}>
      <div className="imgContainer">
        <img alt="" src={product.image} />
      </div>

      <div>
        <div>
          <p>
            {detail
              ? product.title
              : product.title
              ? product.title.substring(0, 25) + "..."
              : ""}
          </p>
          {detail ? (
            <div>
              <span>R$ {product.price}</span>
            </div>
          ) : (
            <div>
              <Link to={`/${product.id}`}>
                <span>SHOP</span>
              </Link>
            </div>
          )}
        </div>
        <div>
          <p>
            {detail
              ? product.description
              : product.description
              ? product.description.substring(0, 100) + "..."
              : ""}
          </p>
        </div>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
