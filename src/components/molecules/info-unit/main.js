import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";
import ImageHolder from "../../atoms/image-holder/small";

export default function main() {
  return (
    <Wrapper>
      <ImageHolder></ImageHolder>
      <Text>약이름한글</Text>
      <Text>약이름영어</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 10.5rem;
`;
