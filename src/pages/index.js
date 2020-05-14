import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Button from "../components/Button/Button"
import Image from "gatsby-image"

const ContentWrapper = styled.div`
  width: 65%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: calc(100vh- 80px);

  h1 {
    font-size: 80px;
    padding-top: 100px;
    margin: 0;
    width: 70%;
    line-height: 0.9;
  }
  p {
    margin: 20px 0 40px;
    width: 40%;
  }
`

const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 35%;
  object-fit: cover;
  height: 100vh;
`

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Designing your space </h1>
      <p>
        While artist work from real to the abstract, architects must work from
        the real.
      </p>
      <Button>estimate project</Button>
    </ContentWrapper>
    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "interior" }, childImageSharp: { fixed: {} }) {
      childImageSharp {
        fluid(
          maxWidth: 1000
          maxHeight: 1200
          quality: 100
          duotone: { highlight: "#f00e2e", shadow: "#192550" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
