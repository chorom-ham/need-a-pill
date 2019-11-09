import React from "react";
import styled from "styled-components";
import Text from "../../../atoms/text";

export default function descriptions() {
  return (
    <Wrapper>
      <Text
        level={3}
        weight="bold"
        align="left"
        color="#b9b9ba"
        spacing="-0.04rem"
      >
        Description
      </Text>
      <Text
        level={3}
        weight="noraml"
        align="left"
        color="#333"
        spacing="-0.04rem"
      >
        약 외형
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.8rem 1.6rem;
`;
