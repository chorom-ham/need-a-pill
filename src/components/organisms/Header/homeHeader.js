import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";

function homeHeader() {
  return (
    <HomeHeaderWrapper>
      <Text
        level={4}
        color="#ffffff"
        fstyle="normal"
        weight={500}
        align="center"
      >
        Needapill is a service for foreigners residing in Korea who are in need
        of medicinal information.
      </Text>
    </HomeHeaderWrapper>
  );
}

const HomeHeaderWrapper = styled.header`
  width: 100%;
  height: 6rem;
  background-color: #3446d4;
  display: inline-block;
  padding: 0 2.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default homeHeader;
