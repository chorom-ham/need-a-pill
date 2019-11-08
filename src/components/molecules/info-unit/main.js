import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";
import ImageHolder from "../../atoms/image-holder/small";

export default function main() {
  return (
    <Wrapper>
      <ImageHolder></ImageHolder>
      <NameWrapper>
        <Text
          level={5}
          weight="bold"
          align="left"
          color="black"
          spacing="-0.056rem"
        >
          약이름영어
        </Text>
        <Text
          level={4}
          weight="noraml"
          align="left"
          color="#b9b9ba"
          spacing="-0.048rem"
        >
          약이름한글
        </Text>
      </NameWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 10.5rem;
  display: flex;
  border-bottom: 0.2rem solid #ececf0;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;
