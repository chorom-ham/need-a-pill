import React from "react";
import styled from "styled-components";
import Text from "../../../atoms/text";

export default function lastModification() {
  return (
    <Wrapper>
      <Text
        level={3}
        weight="bold"
        align="left"
        color="#b9b9ba"
        spacing="-0.04rem"
      >
        Last Date of Usage Manual Modification
      </Text>
      <Text
        level={3}
        weight="noraml"
        align="left"
        color="#333"
        spacing="-0.04rem"
      >
        최근 수정일자
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
