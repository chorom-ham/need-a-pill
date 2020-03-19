import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../organisms/brief-post";
import axios from "axios";
import { useRouter } from "next/router";

export default function postList() {
  const [data, isLoading] = getPost();
  return (
    <>
      {console.log(data)}
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </>
  );
}

const getPost = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(
          `https://needapill-server.herokuapp.com${router.pathname}`
        );
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
      fetchData();
    };
  }, []);

  return [data, isLoading];
};
