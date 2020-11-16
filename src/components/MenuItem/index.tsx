import React from "react";
import styled from "styled-components";

export interface Props {
  selected: boolean;
}

const StyledMenuItem = styled.button`
  height: 51px;
  width: 100px;
  left: 0px;
  top: 0px;
  border-radius: 10px;
  background-color: ${(props: Props) => (props.selected ? `#FAD424` : `#fff`)};

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

const MenuItem = ({ selected = true }) => {
  return <StyledMenuItem selected={selected}>Hello</StyledMenuItem>;
};

export default MenuItem;
