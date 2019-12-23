import React from "react";
import styled from "styled-components";
import Box from "../../atoms/text-box/show-selected";
import Text from "../../atoms/text";
import CheckSquare from "../../atoms/icon/check-square";

export default function TextBox(props) {
  return (
    <Wrapper>
      <Box>
        <CheckSquare
          style={{ width: "1.6rem", height: "1.4rem", marginRight: "0.8rem" }}
          fill="#3446d4"
        ></CheckSquare>
        <Text level={4} color="#3446d4" spacing="-0.048rem" align="left">
          {props.selected}
        </Text>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
