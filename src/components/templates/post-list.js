import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../organisms/brief-post";
import axios from "axios";
import { useRouter } from "next/router";
import dotenv from "dotenv";

dotenv.config();

export default function postList() {
  const [data, isLoading] = getPost();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data && !isLoading && (
        <div>
          {data.posts.map((value, index) => (
            <Post
              key={index}
              _id={value._id}
              title={value.title}
              name={value.author_name}
              profile={value.author_image}
              time={value.created_at}
              comment={value.comment_num}
            ></Post>
          ))}
        </div>
      )}
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
          `${process.env.API_HOST}${router.pathname}`
        );
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    setTimeout(fetchData, 1000);
  }, []);

  return [data, isLoading];
};
