import React from "react";
import Text from "../../../atoms/text";
import styled, { css } from "styled-components";

export default function TabButton(props) {
  const { isSelected, name, onClick } = props;

  return (
    <Button onClick={onClick} isSelected={isSelected}>
      <Text
        width="6rem"
        level={4}
        color={isSelected ? " #3446d4" : "#333"}
        fstyle="normal"
        weight={500}
        spacing="-0.048rem"
        align="center"
      >
        {name}
      </Text>
    </Button>
  );
}

const Button = styled.button`
  height: fit-content;
  width: fit-content;
  padding: 0.4rem;
  background-color: white;
  border: none;
  outline: none;
  ${props => css`
    ${props.isSelected && "border-bottom: solid 0.1rem #3446d4;"}
  `}
`;
