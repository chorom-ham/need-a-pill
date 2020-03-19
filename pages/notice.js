import React from "react";
import styled from "styled-components";
import Header from "../src/components/organisms/Header/menuHeader";
import Posts from "../src/components/templates/post-list";
import WriteButton from "../src/components/molecules/Button/write";

export default function Notice() {
  return (
    <>
      <Header headerText="Notice"></Header>
      <Posts></Posts>
      <WriteButton></WriteButton>
    </>
  );
}
