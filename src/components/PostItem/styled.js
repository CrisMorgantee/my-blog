import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  border-bottom: 1px solid var(--borders);

  body#grid & {
    flex-direction: column;
    justify-content: center;
    border: none;
    padding: 2rem 1rem;
  }
`

export const PostItemTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 90px;
  min-height: 90px;
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--postColor);
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  border-radius: 50%;
  text-transform: uppercase;

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
