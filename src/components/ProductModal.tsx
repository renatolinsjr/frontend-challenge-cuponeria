import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Colors, FlexCenter } from "../utils/HelperStyles";
import useDeviceDetect from "../hooks/useDeviceDetect";
import { isMobile, Product } from "../utils/Types";

const BackdropDiv: any = styled(motion.div)`
  overflow-x: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props: isMobile) => (props.isMobile ? "white" : "#262626")};
  z-index: 10;
  opacity: 1;
  ${FlexCenter}
`;

const Animation = styled(motion.div)`
  background-color: ${Colors.red};
  height: 100vh;
  width: 100vw;
  position: absolute;
  right: 0;
  z-index: 11;
`;

const Root: any = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: ${(props: isMobile) =>
    props.isMobile ? "30px auto;" : "100px auto;"};
  border-radius: 15px;
  margin-top: ${(props: isMobile) => (props.isMobile ? "200px" : "")};
  box-shadow: ${(props: isMobile) =>
    props.isMobile ? "0 0 0px white" : "0 0 5px #ccc;"};
`;

const Details = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;
  background: white;
  border-radius: 15px;
`;

const ImageDiv = styled.div`
  max-width: 500px;
  min-width: 290px;
  overflow: hidden;
  margin: 25px;
  ${FlexCenter}
`;

const Image = styled.img`
  max-width: 356px;
  max-height: 452px;
  display: block;
  object-fit: cover;
`;

const Box = styled.div`
  max-width: 500px;
  min-width: 290px;
  margin: 25px;
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

const Price = styled.span`
  color: ${Colors.red};
`;

const Description = styled.p`
  line-height: 1.5;
  margin: 15px 0;
`;

const Button = styled(motion.button)`
  background: #333;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px 25px;
  margin-top: 15px;
`;

interface Props {
  closeModal: Function;
  showModal: boolean;
  product: Product;
}

const Panels = () => {
  return (
    <>
      <Animation
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          top: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
      ></Animation>
      <Animation
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
      ></Animation>
    </>
  );
};

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

export default function ProductModal(props: Props) {
  const { isMobile } = useDeviceDetect();

  return (
    <div>
      {props.showModal && (
        <>
          <BackdropDiv
            isMobile={isMobile}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 1 }}
          >
            <Root isMobile={isMobile}>
              <Details>
                <ImageDiv>
                  <Image src={props.product.image} alt="" />
                </ImageDiv>

                <Box>
                  <Row>
                    <Title>{props.product.title}</Title>
                    <Price>
                      {props.product.price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Price>
                  </Row>

                  <Description>{props.product.description}</Description>

                  <Button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      props.closeModal();
                    }}
                  >
                    BACK
                  </Button>
                </Box>
              </Details>
            </Root>
          </BackdropDiv>
          <Panels />
        </>
      )}
    </div>
  );
}
