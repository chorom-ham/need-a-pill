import React from "react";
import styled from "styled-components";
import Header from "../src/components/organisms/Header/menuHeader";
import Posts from "../src/components/templates/post-list";
import WriteButton from "../src/components/molecules/Button/write";
import Search from "../src/components/molecules/Form/support-search";

export default function About() {
  return (
    <>
      <Header headerText="Support"></Header>
      <Search></Search>
      <Posts></Posts>
      <WriteButton></WriteButton>
    </>
  );
}
