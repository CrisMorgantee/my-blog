import styled from "styled-components"
import media from "styled-media-query"

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--background);
  transition: opacity 0.4s;

  

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;

    ${media.lessThan("large")`
      padding: 0.5rem 1rem;
    `}
  }
  .ais-SearchBox {
    padding-top: 6rem;

    ${media.lessThan("large")`
      padding-top: 1rem;
    `}
  }
  .ais-Stats {
    color: var(--texts);
  }
  body#grid & {
    .ais-Hits-list {
      display: grid;
      grid-area: card;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      background-color: var(--borders);
      border-bottom: 1px solid var(--borders);
      border-top: 1px solid var(--borders);
      margin-top: 2rem;
    }
    .ais-Hits-item {
      background-color: var(--background);
    }
  }
  }
  .ais-SearchBox-input {
    display: flex;
    width: 100%;
    color: var(--texts);
    font-size: 1.6rem;
    background: none;
    border: none;
    border-bottom: 1px solid var(--borders);
    padding: 0.5rem;

    &::placeholder {
      color: var(--texts);
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
