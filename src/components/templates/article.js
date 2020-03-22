import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../organisms/article/title";
import Text from "../atoms/text";
import Comment from "../organisms/article/comment";
import Write from "../organisms/article/write-comment";
import { useRouter } from "next/router";
import axios from "axios";

export default function Article() {
  const [data, isLoading] = getPost();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data && !isLoading && (
        <div>
          <Wrapper>
            <TopWrapper>
              <Title
                title={data.title}
                image={data.author_image}
                name={data.author_name}
                time={data.created_at}
                email={data.author_email}
              ></Title>
              <TextWrapper>
                <Text level={4} spacing="-0.036rem" color="#333">
                  {data.body}
                </Text>
                {data.image && <Img src={data.image}></Img>}
              </TextWrapper>
            </TopWrapper>
            <BottomWrapper>
              <NumWrapper>
                <Text
                  level={4}
                  weight={500}
                  spacing="-0.036rem"
                  color="#3446d4"
                >
                  {data.comments.length}
                </Text>
                &nbsp;
                <Text level={4} weight={500} spacing="-0.036rem">
                  {data.comments.length < 2 ? "Comment" : "Comments"}
                </Text>
              </NumWrapper>
              {data.comments.map((value, index) => (
                <Comment
                  key={index}
                  img={value.author_image}
                  name={value.author}
                  body={value.body}
                  time={value.created_at}
                  email={value.author_email}
                  id={value._id}
                ></Comment>
              ))}
            </BottomWrapper>
            <Write></Write>
          </Wrapper>
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
          `https://needapill-server.herokuapp.com${router.query.category}/${router.query.id}`
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

const Wrapper = styled.div``;

const TopWrapper = styled.div`
  padding: 0 2rem 0 2rem;
  border-bottom: 0.4rem solid #ececf0;
`;

const TextWrapper = styled.div`
  padding: 2rem 0 2rem 0;
`;

const BottomWrapper = styled.div`
  margin-bottom: 6rem;
`;

const NumWrapper = styled.div`
  margin: 1.2rem 0 0.4rem 0;
  padding: 0 2rem;
  display: flex;
`;

const Img = styled.img`
  width: 32rem;
  margin: 1.2rem 0 0.4rem 0;
  padding: 0 2rem;
  box-sizing: border-box;
`;
