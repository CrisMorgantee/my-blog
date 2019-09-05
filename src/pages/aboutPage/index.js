import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import * as S from "../../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <S.PostHeader>
      <S.PostTitle>Em Desenvolvimento</S.PostTitle>
    </S.PostHeader>
  </Layout>
)

export default AboutPage
