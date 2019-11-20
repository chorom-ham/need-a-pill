import styled, { css } from "styled-components";

export default styled.p`
  ${props => css`
    width: ${props.width};
    font-weight: ${props.weight};
    font-style: ${props.fstyle};
    text-align: ${props.align};
    font-size: ${0.4 + props.level * 0.2}rem;
    color: ${props.color};
    letter-spacing: ${props.spacing};
    margin: 0;
    padding: 0;
  `}
`;
