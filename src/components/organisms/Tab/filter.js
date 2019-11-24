import React, { useState } from "react";
import TabButton from "../../molecules/Button/tab-button/filter";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Filter() {
  const [selected, setSelected] = useState(0);
  const router = useRouter();

  return (
    <Wrapper>
      <Link
        href={`/search-result?keyword=${router.query.keyword}&filter=Relevance&page=${router.query.page}`}
      >
        <a>
          <TabButton
            onClick={() => setSelected(0)}
            isSelected={selected === 0}
            name="Relevance"
          />
        </a>
      </Link>
      <Link
        href={`/search-result?keyword=${router.query.keyword}&filter=Alphabetical&page=${router.query.page}`}
      >
        <a>
          <TabButton
            onClick={() => setSelected(1)}
            isSelected={selected === 1}
            name="Alphabetical"
          />
        </a>
      </Link>
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
