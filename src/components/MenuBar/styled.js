import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  width: 3.75rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  background: var(--mediumBackground);
  transition: background 0.5ms;
  border-left: 1px solid var(--borders);
  position: fixed;
  right: 0;

  ${media.lessThan("large")`
    flex-direction: row;
    width: 100%;
    height: auto;
    padding: 0;
    border-top: 1px solid var(--borders);
    position: fixed;
    bottom: 0;
  `}
`
export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`
export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`
export const MenuBarItem = styled.span`
  width: 3.75rem;
  height: 3.75rem;
  display: block;
  padding: 1.1rem;
  color: var(--texts);
  cursor: pointer;

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }
  &.display {
    ${media.lessThan("medium")`
      display: none;
    `}
  }
  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}

  &:hover {
    color: var(--highlight);
  }
`
