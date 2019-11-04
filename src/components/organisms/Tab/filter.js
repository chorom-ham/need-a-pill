import React, { useState } from "react";
import TabButton from "../../molecules/Button/tab-button/filter";
import styled from "styled-components";

export default function Filter() {
  const [selected, setSelected] = useState(0);

  return (
    <Wrapper>
      <TabButton
        onClick={() => setSelected(0)}
        isSelected={selected === 0}
        name="Relevance"
      />
      <TabButton
        onClick={() => setSelected(1)}
        isSelected={selected === 1}
        name="Alphabetical"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 2rem 7rem;
`;
