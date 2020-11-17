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
      margin: 0.5rem 0;

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
`;

export default StyledPage;
