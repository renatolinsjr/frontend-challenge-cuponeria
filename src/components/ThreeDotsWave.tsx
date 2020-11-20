import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Colors } from "../utils/HelperStyles";

const Container = styled(motion.div)`
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: space-around;
`;

const Circle = styled(motion.span)`
  display: block;
  width: 2rem;
  height: 2rem;
  background-color: ${Colors.red};
  border-radius: 1rem;
`;

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

export default function ThreeDotsWave() {
  return (
    <Container
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <Circle
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <Circle
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <Circle
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </Container>
  );
}
