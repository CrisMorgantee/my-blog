// import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb as Light } from "@styled-icons/octicons/LightBulb"
import React, { useEffect, useState } from "react"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { Home } from "styled-icons/boxicons-solid/Home"
import { ThList as List } from "styled-icons/typicons/ThList"
import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"

// import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.5}
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.5}
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {/* <Grid /> */}
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        {/* <S.MenuBarItem title="Ir para o topo">
          <Arrow />
        </S.MenuBarItem> */}
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
