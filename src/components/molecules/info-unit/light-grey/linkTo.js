import React from "react";
import styled from "styled-components";
import Text from "../../../atoms/text";

export default function link() {
  return (
    <Wrapper>
      <Text
        level={3}
        weight="bold"
        align="left"
        color="#b9b9ba"
        spacing="-0.04rem"
      >
        Link to health.kr
      </Text>
      <Text
        level={3}
        weight="noraml"
        align="left"
        color="#333"
        spacing="-0.04rem"
      >
        health.kr로 연결링크
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
