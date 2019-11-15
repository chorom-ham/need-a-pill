import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled, { css } from "styled-components";
import MainHeader from "../src/components/organisms/Header/mainHeader";

import SearchResult from "../src/components/templates/search-result";

export default function BeforeSearch() {
  return (
    <Wrapper>
      <Head>
        <title>Need a Pill</title>
      </Head>
      <MainHeader></MainHeader>

      <SearchResult></SearchResult>
    </Wrapper>
  );
}

BeforeSearch.getInitialProps = () => {
  return {};
};

const Wrapper = styled.div`
  background-color: #fff;
`;
