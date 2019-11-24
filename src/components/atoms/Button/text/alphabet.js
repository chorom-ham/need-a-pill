import styled, { css } from "styled-components";

export default styled.button`
  width: 2.8rem;
  height: 2.8rem;
  border: none;
  border-radius: 0.8rem;
  margin: 0 0.8rem 0.8rem 0;
  ${props => css`
    ${props.isClicked
      ? "background-color: #3446d4"
      : "background-color: #ececf0"}
    ${props.isClicked ? "color: #fff" : "color: #333"}
  `}
`;
