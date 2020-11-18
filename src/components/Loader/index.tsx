import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  .loading-container {
    display: flex;
    width: 100%;
    min-height: 45%;
    align-items: center;
    vertical-align: middle;
  }
  .loading-container:nth-of-type(0n + 1) {
    background: #ff3c31;
  }
  .loading-container:nth-of-type(0n + 2) {
    background: #a2395d;
  }
  .loading-container:nth-of-type(0n + 3) {
    background: #25a893;
  }
  .loading-container:nth-of-type(0n + 4) {
    background: #31b85f;
  }
  .loading-container:nth-of-type(0n + 5) {
    background: #1c1f1d;
  }
  .loading-container:nth-of-type(0n + 6) {
    background: #a2a178;
  }
  .loading-container:nth-of-type(0n + 7) {
    background: #ddb89a;
  }

  .loader {
    margin: 0 auto;
    text-align: center;
    width: 100%;
    min-height: 100%;
    display: table-cell;
    vertical-align: middle;
    opacity: 0.4;
  }
  .loader * {
    animation-play-state: paused;
  }
  .loader:hover {
    opacity: 1;
  }
  .loader:hover * {
    animation-play-state: running;
  }

  /** Settings */
  .loading-bubbles {
    margin: auto;
  }
  .loading-bubbles .bubble-container {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
  }
  .loading-bubbles .bubble-container .bubble {
    border-radius: 50%;
    background-color: #fff;
    width: 100%;
    height: 100%;
    transform-origin: 50% 50%;
    animation: bubble 1.2s -0.6s infinite ease-out;
  }
  .loading-bubbles .bubble-container:nth-of-type(2n) .bubble {
    animation-delay: -0.3s;
  }
  .loading-bubbles .bubble-container:nth-of-type(3n) .bubble {
    animation-delay: 0s;
  }

  .loading-spinning-bubbles {
    position: relative;
    margin: auto;
  }
  .loading-spinning-bubbles .bubble-container {
    position: absolute;
    top: calc(50% - 10px / 2);
    left: calc(50% - 10px / 2);
    transform-origin: -150% 50%;
  }
  .loading-spinning-bubbles .bubble-container .bubble {
    background: #fff;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: bubble 1s infinite;
    animation-delay: inherit;
  }
  .loading-spinning-bubbles .bubble-container:nth-of-type(0n + 1) {
    transform: translateX(200%) rotate(-90deg);
    animation-delay: -1.5s;
  }
  .loading-spinning-bubbles .bubble-container:nth-of-type(0n + 2) {
    transform: translateX(200%) rotate(-45deg);
    animation-delay: -1.375s;
  }
  .loading-spinning-bubbles .bubble-container:nth-of-type(0n + 3) {
    transform: translateX(200%);
    animation-delay: -1.25s;
  }
  .loading-spinning-bubbles .bubble-container:nth-of-type(0n + 4) {
    transform: translateX(200%) rotate(45deg);
    animation-delay: -1.125s;
  }
  .loading-spinning-bubbles .bubble-container:nth-of-type(0n + 5) {
    transform: translateX(200%) rotate(90deg);
    animation-delay: -1s;
  }
  .loading-spinning-bubbles .bubble-container:nth-of-type(0n + 6) {
    transform: translateX(200%) rotate(135deg);
    animation-delay: -0.875s;
  }
  .loading-spinning-bubbles .bubble-container:nth-of-type(0n + 7) {
    transform: translateX(200%) rotate(180deg);
    animation-delay: -0.75s;
  }
  .loading-spinning-bubbles .bubble-container:nth-of-type(0n + 8) {
    transform: translateX(200%) rotate(225deg);
    animation-delay: -0.625s;
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <div className="loading-container">
        <div className="loader">
          <div className="loading-spinning-bubbles">
            <div className="bubble-container">
              <div className="bubble"></div>
            </div>
            <div className="bubble-container">
              <div className="bubble"></div>
            </div>
            <div className="bubble-container">
              <div className="bubble"></div>
            </div>
            <div className="bubble-container">
              <div className="bubble"></div>
            </div>
            <div className="bubble-container">
              <div className="bubble"></div>
            </div>
            <div className="bubble-container">
              <div className="bubble"></div>
            </div>
            <div className="bubble-container">
              <div className="bubble"></div>
            </div>
            <div className="bubble-container">
              <div className="bubble"></div>
            </div>
          </div>
        </div>
      </div>
    </StyledLoader>
  );
};

export default Loader;
