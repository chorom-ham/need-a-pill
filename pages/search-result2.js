import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled, { css } from "styled-components";
import MainHeader from "../src/components/organisms/Header/mainHeader";

import SearchResults from "../src/components/templates/search-result2";

export default function SearchResult() {
  return (
    <Wrapper>
      <Head>
        <title>Need a Pill</title>
      </Head>
      <MainHeader></MainHeader>

      <SearchResults></SearchResults>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
`;
