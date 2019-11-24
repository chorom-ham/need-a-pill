import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled, { css } from "styled-components";
import MainHeader from "../src/components/organisms/Header/mainHeader";
import Contents from "../src/components/templates/more-info";

export default function BeforeSearch() {
  return (
    <Wrapper>
      <Head>
        <title>Need a Pill</title>
      </Head>
      <MainHeader></MainHeader>
      <Contents></Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
`;
