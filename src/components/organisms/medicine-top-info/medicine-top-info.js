import React from "react";
import styled from "styled-components";
import ImageHolder from "../../atoms/image-holder/large";
import Text from "../../atoms/text";

export default function MedicineTopInfo(props) {
  return (
    <Wrapper>
      <ImageHolder></ImageHolder>

      <Text
        level={6}
        weight="bold"
        align="left"
        color="black"
        spacing="-0.056rem"
      >
        {props.engName}
      </Text>
      <Text level={4} align="left" color="#b9b9ba" spacing="-0.048rem">
        {props.krName}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.3rem;
`;
