import React from "react";
import styled from "styled-components";
import Header from "../src/components/organisms/Header/articleHeader";
import Post from "../src/components/templates/article";
import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  var category = router.query.category.split("/")[1];
  category = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <Header headerText={category}></Header>
      <Post></Post>
    </>
  );
}
