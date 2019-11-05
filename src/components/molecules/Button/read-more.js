import React from "react";
import Link from "next/link";
import Right from "../../atoms/Button/icon/chevron/right";
import MoreButton from "../../atoms/Button/moreButton";
import Text from "../../atoms/text";
import styled from "styled-components";

function ReadMore() {
  return (
    <>
      <Link href="more-info">
        <A>
          <MoreButton justify="center" align="center" bottomRadius="0.8rem">
            <Text level="5" weight="bold" spacing="-0.056rem" color="white">
              Read More
            </Text>
            <Right
              style={{
                width: "0.5rem",
                height: "0.85rem",
                padding: "0 0.5rem"
              }}
              fill="white"
            ></Right>
          </MoreButton>
        </A>
      </Link>
    </>
  );
}

const A = styled.a`
  text-decoration: none;
`;

export default ReadMore;
