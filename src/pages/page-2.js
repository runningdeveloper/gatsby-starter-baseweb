import React from "react"
import Layout from "../components/layout"
import { Paragraph2 } from "baseui/typography"
import { Heading, HeadingLevel } from "baseui/heading"
import {Grid, Cell} from 'baseui/layout-grid';

export default function PageTwo() {
  return (
    <Layout>
      <HeadingLevel>
      <Grid>
        <Cell span={12}>
        <Heading>Page 2</Heading>

        <Paragraph2>Page 2</Paragraph2>

    </Cell>
    </Grid>
      </HeadingLevel>
    </Layout>
  )
}
