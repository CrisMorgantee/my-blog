import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  width: 3.75rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  position: fixed;
  right: 0;
`
export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`
export const MenuBarLink = styled(Link)`
  display: block;
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

  &:hover {
    color: var(--highlight);
  }
`
