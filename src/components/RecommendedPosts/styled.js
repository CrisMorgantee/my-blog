import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  display: flex;
  background: var(--mediumBackground);
  border-top: 1px solid var(--borders);
  border-bottom: 1px solid var(--borders);
`

export const RecommendedLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 50%;
  background: var(--mediumBackground);
  color: var(--highlight);
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5ms;
  &:hover {
    background: var(--borders);
  }
  &.previous {
    border-right: 1px solid var(--borders);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
