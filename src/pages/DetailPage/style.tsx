import styled from "styled-components";

const StyledPage = styled.div`
  min-height: 100vh;

  background: #f3f2ee;

  header {
    background: #111111;
    display: flex;
    flex-direction: column;
    grid-area: header;

    div:first-child {
      display: flex;
      margin: 2rem 3rem 1rem 3rem;

      @media only Screen and (max-width: 900px) {
        margin: 2rem 0 1rem 0;
      }

      img {
        width: 64px;
        height: 64px;
        margin-left: 0.5rem;
      }

      span {
        width: 90%;

        h1 {
          color: #fff;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 30px;
          line-height: 35px;
          text-align: center;
        }
      }
    }

    div:nth-child(2) {
      width: 100%;
      padding: 0.5rem;
      display: flex;
    }
  }

  h2 {
    margin-left: 0.5rem;
  }

  .sectionProductCard {
    grid-area: discover;
  }

  .sectionProductCard > div {
    display: flex;
    flex-direction: row;
  }

  .sectionProductCard > div > div {
    margin: 0.5rem;
  }

  .sectionFeaturedCard {
    grid-area: featured;
  }

  .sectionFeaturedCard > div {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
  }

  .sectionFeaturedCard > div > div {
    margin: 0.5rem;
  }

  .loader {
    z-index: 20;
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader > .div {
    z-index: 21;
    position: fixed;
  }
`;

export default StyledPage;
