import React from "react";
import styled from "styled-components";
import ImageHolder from "../../atoms/image-holder/large";
import Text from "../../atoms/text";

export default function MedicineTopInfo(props) {
  return (
    <Wrapper>
      <ImageHolder></ImageHolder>
      <NameWrapper>
        <Text
          level={6}
          weight="bold"
          align="left"
          color="black"
          spacing="-0.056rem"
        >
          {props.engName}
        </Text>
        <Text
          level={4}
          weight="noraml"
          align="left"
          color="#b9b9ba"
          spacing="-0.048rem"
        >
          {props.krName}
        </Text>
      </NameWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.3rem;
`;

const NameWrapper = styled.div`
  margin: 0 2.4rem;
`;
