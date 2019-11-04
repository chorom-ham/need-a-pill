import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled, { css } from "styled-components";
import MainHeader from "../src/components/organisms/Header/mainHeader";

export default function BeforeSearch() {
  return (
    <>
      <Head>
        <title>Need a Pill</title>
      </Head>
      <MainHeader></MainHeader>
      search result
    </>
  );
}
