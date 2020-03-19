import React from "react";
import styled from "styled-components";
import Post from "../organisms/brief-post";
import axios from "axios";
import { useRouter } from "next/router";

export default function postList() {
  return (
    <>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </>
  );
}

const getPost = () => {
  const router = useRouter();
  try {
    return axios.get(
      `https://needapill-server.herokuapp.com${router.pathname}`
    );
  } catch (error) {
    console.error(error);
  }
};
