import React from "react";
import styled from "styled-components";
import Text from "../../../atoms/text";

export default function ATCcode() {
  return (
    <Wrapper>
      <Text
        level={3}
        weight="bold"
        align="left"
        color="#b9b9ba"
        spacing="-0.04rem"
      >
        ATC Code
      </Text>
      <Text
        level={3}
        weight="noraml"
        align="left"
        color="#333"
        spacing="-0.04rem"
      >
        ATC 코드
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
