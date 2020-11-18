import React from "react";

// styled components
import StyledLoader from './style';
export interface Props {
}

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
