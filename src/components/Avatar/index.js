import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fixed(width: 70, height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <S.AvatarWrapper
      fixed={avatarImage.childImageSharp.fixed}
      title="Foto do perfil"
      alt="Foto do perfil"
    />
  )
}

export default Avatar
