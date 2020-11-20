import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styled from "styled-components";
import { FlexCenter } from "../utils/HelperStyles";
import useDeviceDetect from "../hooks/useDeviceDetect";
import { isMobile, Product } from "../utils/Types";

const Container: any = styled.div`
  margin: ${(props: isMobile) => (props.isMobile ? "80px 0px 50px 0px" : "")};
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
`;

const Details = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;
  background: white;
  border-radius: 15px;
  position: absolute;
`;

const ImageDiv = styled.div`
  max-width: 500px;
  min-width: 290px;
  overflow: hidden;
  margin: 25px;
  ${FlexCenter}
`;

const Image: any = styled.img`
  max-width: 285px;
  max-height: ${(props: isMobile) => (props.isMobile ? "250px" : "361px")};
  display: block;
  object-fit: cover;
`;

const Box = styled.div`
  max-width: 500px;
  min-width: 290px;
  margin: 25px;
  ${FlexCenter}
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Description = styled.p`
  line-height: 1.5;
  margin: 15px 0;
`;

const Buttona = styled(motion.button)`
  background: #333;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px 25px;
  margin-top: 15px;
`;

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface Props {
  products: Product[];
  select: Function;
}

export default function Discover(props: Props) {
  const { products, select } = props;
  const [[page, direction], setPage] = useState([0, 0]);
  const { isMobile } = useDeviceDetect();

  const index = wrap(0, products.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <Container isMobile={isMobile}>
        <AnimatePresence initial={false} custom={direction}>
          <Details
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <ImageDiv>
              <Image src={products[index].image} isMobile={isMobile} alt="" />
            </ImageDiv>

            <Box>
              <Row>
                <Title>{products[index].title}</Title>
              </Row>

              {!isMobile && (
                <Description>
                  {products[index].description.substring(0, 200)}
                </Description>
              )}
              <Buttona
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  select(products[index]);
                }}
              >
                SHOP
              </Buttona>
            </Box>
          </Details>
        </AnimatePresence>
        {!isMobile && (
          <>
            <Button style={{ right: "10px" }} onClick={() => paginate(1)}>
              {"‣"}
            </Button>
            <Button
              style={{ left: "10px", transform: "scale(-1)" }}
              onClick={() => paginate(-1)}
            >
              {"‣"}
            </Button>
          </>
        )}
      </Container>
    </>
  );
}
