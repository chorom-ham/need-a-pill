import React, { useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import SearchIcon from "../../atoms/Button/icon/search";

function searchForm(props) {
  const [query, setQuery] = useState();
  const filter = "relevance";
  const page_num = 2;

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
            props.onClick();
          }
        }}
      ></Input>
      <Link
        href={`/search-result?keyword=${query}&filter=${filter}&page=${page_num}`}
      >
        <Button onClick={props.onClick}>
          <a>
            <SearchIcon style={{ width: "2rem", height: "2rem " }}></SearchIcon>
          </a>
        </Button>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin: 0 auto 0 auto;
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
`;
const Button = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
  position: absolute;
  right: 3.5rem;
  border: none;
  background-color: transparent;
`;

export default searchForm;
