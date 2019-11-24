import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../atoms/text";
import AlphabetBox from "../../molecules/Button/symptom-select/alphabet";

export default function alphabetButtonContainer() {
  const getAlphabet = items => (
    <>
      <ButtonRow>{items.slice(0, 8).map(getButton)}</ButtonRow>
      <ButtonRow>{items.slice(8, 16).map(getButton)}</ButtonRow>
      <ButtonRow>{items.slice(16, 24).map(getButton)}</ButtonRow>
      <ButtonRow>{items.slice(24, 26).map(getButton)}</ButtonRow>
    </>
  );

  const getButton = (item, index) => {
    return <AlphabetBox key={index} alphabet={item}></AlphabetBox>;
  };

  return <Wrapper>{getAlphabet(Alphabet)}</Wrapper>;
}

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  background-color: transparent;
  width: 31.2rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0.8rem 0.4rem 1.6rem;
  box-sizing: border-box;
`;

const Alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
