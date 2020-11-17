import styled from "styled-components";

const StyledPage = styled.div`
  $slider-width: 1000px;
  $slider-height: 366px;
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
      margin: 0.5rem 0;
      display: flex;
      justify-content: space-evenly;
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

  .sectionFeaturedCard > div > div > div {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
  }

  .sectionFeaturedCard > div > div > div > div {
    margin: 0.5rem;
  }

  .slider {
    position: relative;
    width: $slider-width;
    height: $slider-height;
  }

  .wrapper {
    overflow: hidden;
    position: relative;
    width: $slider-width;
    height: $slider-height;
    z-index: 1;
  }

  .slides {
    display: flex;
    position: relative;
    top: 0;
    left: -$slider-width;
    width: 10000px;
  }

  .slides.shifting {
    transition: left 0.2s ease-out;
  }

  .slide {
    width: $slider-width;
    height: $slider-height;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 1s;
    position: relative;
  }
`;

export default StyledPage;
