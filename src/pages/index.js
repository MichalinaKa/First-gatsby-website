import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Button from "../components/Button/Button"

const ContentWrapper = styled.div`
  width: 65%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: calc(100vh- 80px);

  h1 {
    font-size: 85px;
    padding-top: 100px;
    margin: 0;
    width: 40%;
    line-height: 0.9;
  }
  p {
    margin: 20px 0 40px;
    width: 40%;
  }
`

const ImageWrapper = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 35%;
  object-fit: cover;
  height: 100vh;
`

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Your new space </h1>
      <p>
        While artist work from real to the abstract, architects must work from
        the real.
      </p>
      <Button>estimate project</Button>
    </ContentWrapper>
    <ImageWrapper src={data.file.publicURL} />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "interior" }) {
      publicURL
    }
  }
`

export default IndexPage
