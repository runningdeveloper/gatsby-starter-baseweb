import React from "react"
import Layout from "../components/layout"
import { Paragraph2 } from "baseui/typography"
import { Heading, HeadingLevel } from "baseui/heading"
import {Grid, Cell} from 'baseui/layout-grid';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Block } from "baseui/block";

export default function PageTwo() {

  const data = useStaticQuery(graphql`
    query PageTwoQuery {
      file(name: {eq: "bird-pic"}) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const birdImage = data.file.childImageSharp.fluid


  return (
    <Layout>
      <HeadingLevel>
      <Grid>
        <Cell span={12}>
        <Heading>Page 2</Heading>

        <Paragraph2>Here is a random bird picture</Paragraph2>
        <Block maxWidth="600px">
        <Img fluid={birdImage} alt="random bird picture"/>
        </Block>

    </Cell>
    </Grid>
      </HeadingLevel>
    </Layout>
  )
}
