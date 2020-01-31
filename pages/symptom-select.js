import React from "react";
import Head from "next/head";
import Link from "next/link";
import MainHeader from "../src/components/organisms/Header/mainHeader";
import styled, { css } from "styled-components";
import TextBox from "../src/components/molecules/text-box/show-selected";
import RecommendedSymptoms from "../src/components/organisms/recommended-symptom";
import Alphabetical from "../src/components/organisms/alphabetical";

import { useRouter } from "next/router";

export default function Symptom() {
  const router = useRouter();
  const keyword = router.query.keyword;

  return (
    <Wrapper>
      <Head>
        <title>Need a Pill</title>
      </Head>
      <MainHeader></MainHeader>
      <TextBox selected={keyword}></TextBox>
      <RecommendedSymptoms keyword={keyword}></RecommendedSymptoms>
      <Alphabetical></Alphabetical>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;
