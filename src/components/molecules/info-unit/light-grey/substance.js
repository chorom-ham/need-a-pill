import React from "react";
import styled from "styled-components";
import Text from "../../../atoms/text";

export default function substance() {
  return (
    <Wrapper>
      <Text
        level={3}
        weight="bold"
        align="left"
        color="#b9b9ba"
        spacing="-0.04rem"
      >
        Substance (by mg)
      </Text>
      <Text
        level={3}
        weight="noraml"
        align="left"
        color="#333"
        spacing="-0.04rem"
      >
        약 성분
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
