import React from "react";
import styled from "styled-components";
import Title from "../organisms/article/title";
import Text from "../atoms/text";
import Comment from "../organisms/article/comment";
import Write from "../organisms/article/write-comment";

export default function Article() {
  return (
    <Wrapper>
      <TopWrapper>
        <Title></Title>
        <TextWrapper>
          <Text level={4} spacing="-0.036rem" color="#333">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum aliquam nibh at gravida. Integer auctor lacus id risus
            viverra semper. Proin fermentum eleifend ex ut sodales. Nam
            porttitor mi nec nisi pulvinar, at tincidunt metus vehicula.
            Suspendisse eu sem hendrerit, vulputate dolor ut, scelerisque diam.
            Mauris ipsum nulla, convallis et dolor non, fringilla gravida elit.
            Proin vitae neque massa. Nam efficitur ante convallis orci molestie
            bibendum. Pellentesque pellentesque quis dui nec aliquet. Aliquam
            sed imperdiet ligula, eu rutrum lacus. Cras pellentesque metus
            neque, et mollis lorem faucibus scelerisque. Donec non pellentesque
            lorem.
          </Text>
        </TextWrapper>
      </TopWrapper>
      <BottomWrapper>
        <Comment></Comment>
        <Comment></Comment>
      </BottomWrapper>
      <Write></Write>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const TopWrapper = styled.div`
  padding: 0 2rem 0 2rem;
  border-bottom: 0.4rem solid #ececf0;
`;

const TextWrapper = styled.div`
  padding: 2rem 0 2rem 0;
`;

const BottomWrapper = styled.div``;
