import React from "react";
import styled from "styled-components";

export interface Props {
  selected?: boolean;
  detail?: boolean;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StyledMenuItem = styled.button`
padding: 0 2rem;
  height: 51px;
  min-width: 100px;
  width: 100;
  left: 0px;
  top: 0px;
  border-radius: 10px;
  background-color: ${(props: Props) =>
    props.selected ? `#FAD424` : props.detail ? `#FAD424` : `#fff`};
  margin: ${(props: Props) => (props.detail ? "auto" : "unset")};

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

const MenuItem = ({
  selected = false,
  detail = false,
  label = "default",
  onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
}) => {
  return (
    <StyledMenuItem selected={selected} detail={detail} onClick={onClick}>
      {detail ? "VOLTAR" : label}
    </StyledMenuItem>
  );
};

export default MenuItem;
