import React, { useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import SearchIcon from "../../atoms/Button/icon/search";
import { useRouter } from "next/router";

function searchForm(props) {
  const [query, setQuery] = useState();
  const filter = "relevance";
  const page_num = 2;
  const router = useRouter();

  return (
    <Wrapper>
      <Input
        type="text"
        name="keyword"
        placeholder="Enter drug name / barcode"
        value={query}
        onChange={event => {
          setQuery(event.target.value);
          if (props.setQuery) {
            props.setQuery(event.target.value);
          }
        }}
        onKeyPress={event => {
          if (event.key === "Enter") {
            if (props.onClick) props.onClick();
            else
              router.push(
                `/search-result?keyword=${query}&filter=${filter}&page=${page_num}`
              );
          }
        }}
      ></Input>
      <Link
        href={`/search-result?keyword=${query}&filter=${filter}&page=${page_num}`}
      >
        <A>
          <Button onClick={props.onClick}>
            <SearchIcon style={{ width: "2rem", height: "2rem " }}></SearchIcon>
          </Button>
        </A>
      </Link>
    </Wrapper>
  );
}

const A = styled.a`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  position: absolute;
  right: 3.5rem;
  border: none;
  background-color: transparent;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
const Input = styled.input`
  width: 31.2rem;
  height: 4.2rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  background-color: white;
  border: none;
  padding: 0 1.6rem;
  box-sizing: border-box;
  letter-spacing: -0.05rem;
  font-size: 1.2rem;
  margin: 0 auto;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export default searchForm;
