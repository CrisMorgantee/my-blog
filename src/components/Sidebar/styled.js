import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 20rem;
  height: 100vh;
  background: var(--mediumBackground);
  border-right: 1px solid var(--borders);
  padding: 2rem;
  position: fixed;

  ${media.lessThan("large")`
    width: 100%;
    height: auto;
    padding: 1rem 2rem;
    align-items: flex-start;
  `}
`
