import React, { useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import SearchIcon from "../../atoms/Button/icon/search";
import { useRouter } from "next/router";

function searchForm(props) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <Wrapper>
      <Input
        type="text"
        name="keyword"
        placeholder="Please write down your keyword"
        value={query}
        onChange={event => {
          setQuery(event.target.value);
        }}
        onKeyPress={event => {
          if (event.key === "Enter") {
            if (query != "") {
              router.push(`/support?keyword=${query}`);
            }
          }
        }}
      ></Input>
      <Button
        onClick={() => {
          if (query != "") {
            router.push(`/support?keyword=${query}`);
          }
        }}
      >
        <SearchIcon style={{ width: "2.4rem", height: "2.4rem" }}></SearchIcon>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 6.4rem;
  background-color: #ececf0;
`;
const Input = styled.input`
  width: 31.2rem;
  height: 4.2rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  background-color: white;
  border: none;
  box-sizing: border-box;
  letter-spacing: -0.05rem;
  font-size: 1.2rem;
  padding: 0 1.6rem;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  right: 9%;
  border: none;
  background-color: transparent;
  padding: 0;
  flex-direction: column;
  justify-content: center;
`;

export default searchForm;
