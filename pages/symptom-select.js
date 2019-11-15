import React from "react";
import Head from "next/head";
import Link from "next/link";
import MainHeader from "../src/components/organisms/Header/mainHeader";
import styled, { css } from "styled-components";

export default function Symptom() {
  return (
    <div>
      <Head>
        <title>Need a Pill</title>
      </Head>
      <MainHeader></MainHeader>
      증상선택페이지
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
