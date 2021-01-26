import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import Logo from "../assets/logo.png";
import { Colors, FlexCenter } from "../utils/HelperStyles";
import useDeviceDetect from "../hooks/useDeviceDetect";

const Root = styled.div`
  ${FlexCenter}
  flex-direction: column;
  background: #262626;
`;

const LogoImg = styled.img`
  width: 300px;
  height: auto;
  padding-top: 20px;
`;

const Categories = styled(motion.ol)`
  list-style: none;
  padding: 20px;
  margin: 0;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
  white-space: nowrap;
`;

const Title = styled(motion.li)`
  font-size: 32px;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
`;

const Undeline = styled(motion.div)`
  width: 100%;
  height: 3px;
  border-radius: 4px;
  background: black;
  position: absolute;
  bottom: -4px;
`;

interface Props {
  setCategory: Function;
  categories: String[] | undefined;
}

export default function Header(props: Props) {
  const { categories, setCategory } = props;
  const [selected, setSelected] = useState(0);
  const constraintsRef = useRef(null);
  const { isMobile } = useDeviceDetect();

  return (
    <Root ref={constraintsRef}>
      <LogoImg src={Logo}></LogoImg>
      <AnimateSharedLayout>
        <Categories
          style={{ transform: "translateZ(0)" }}
          drag={isMobile ? "x" : false}
          dragConstraints={constraintsRef}
          dragElastic={1}
        >
          <Title
            animate
            key={0}
            className={`title ${0 === selected && "selected"}`}
            style={{ color: 0 === selected ? Colors.red : "white" }}
            onClick={() => {
              setSelected(0);
              setCategory("");
            }}
          >
            {0 === selected && (
              <Undeline
                layoutId="underline"
                className="underline"
                style={{ backgroundColor: Colors.red }}
              />
            )}
            home
          </Title>
          {categories &&
            categories.map((category: String, index: number) => {
              return (
                <Title
                  animate
                  key={index + 1}
                  className={`title ${index + 1 === selected && "selected"}`}
                  style={{
                    color: index + 1 === selected ? Colors.red : "white",
                  }}
                  onClick={() => {
                    setSelected(index + 1);
                    setCategory(category);
                  }}
                >
                  {index + 1 === selected && (
                    <Undeline
                      layoutId="underline"
                      className="underline"
                      style={{ backgroundColor: Colors.red }}
                    />
                  )}
                  {category}
                </Title>
              );
            })}
        </Categories>
      </AnimateSharedLayout>
    </Root>
  );
}
