import React from "react";
import styled from "styled-components";
import Profile from "../molecules/brief-post/profile";
import Text from "../atoms/text";
import CommentNum from "../molecules/brief-post/comment";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BriefPost(props) {
  const { title, name, profile, time, comment, _id } = props;
  const router = useRouter();

  return (
    <Link href={`article?category=${router.pathname}&id=${_id}`}>
      <A>
        <Wrapper>
          <ProfileWrapper>
            <Profile name={name} image={profile}></Profile>
          </ProfileWrapper>
          <Text level={4} spacing="-0.036rem" color="#333" weight={500}>
            {title}
          </Text>
          <BottomWrapper>
            <Text level={3} spacing="-0.03rem" color="#999">
              {time}
            </Text>
            <CommentNum num={comment}></CommentNum>
          </BottomWrapper>
        </Wrapper>
      </A>
    </Link>
  );
}

const A = styled.a`
  text-decoration: none;
`;

const Wrapper = styled.div`
  border-bottom: 0.1rem solid #ececf0;
  width: 100%;
  padding: 1.1rem 2rem 1.1rem 2rem;
  box-sizing: border-box;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.4rem;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.4rem;
`;
