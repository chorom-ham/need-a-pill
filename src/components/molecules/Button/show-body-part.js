import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";
import Down from "../../atoms/Button/icon/chevron/down";
import Up from "../../atoms/Button/icon/chevron/up";

export default function showBodyPart(props) {
  const { show, onClick } = props;
  return (
    <Wrapper onClick={onClick}>
      <Text level={4} spacing="-0.048rem" color="#333" align="center">
        If not sure which medicine to take,
        <br />
        select the affected area
      </Text>
      {show ? (
        <Up style={{ width: "2.4rem", height: "2.4rem" }} fill="#3446d4"></Up>
      ) : (
        <Down
          style={{ width: "2.4rem", height: "2.4rem" }}
          fill="#3446d4"
        ></Down>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
