import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "../atoms/text";
import Post from "../atoms/image-holder/about";
import axios from "axios";

export default function About() {
  const [data, isLoading] = getPost();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data && !isLoading && (
        <div>
          {data.posts.map((value, index) => (
            <Post key={index}>
              <Img src={value.image} />
            </Post>
          ))}
        </div>
      )}
    </>
  );
}

const getPost = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(
          `https://needapill-server.herokuapp.com/about`
        );
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return [data, isLoading];
};

const Img = styled.img`
  width: 100%;
`;
