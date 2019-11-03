import styled, { css } from "styled-components";

export default styled.p`
  ${props => css`
    width: ${props.width};
    font-weight: ${props.weight};
    font-style: ${props.fstyle};
    text-align: center;
    font-size: ${props.level * 0.3}rem;
    color: ${props.color};
    letter-spacing: ${props.spacing};
  `}
`;
