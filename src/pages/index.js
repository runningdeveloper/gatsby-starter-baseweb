import React, { useState } from "react"
import Layout from "../components/layout"
import { Paragraph2, Paragraph3 } from "baseui/typography"
import { Heading, HeadingLevel } from "baseui/heading"
import { Button } from "baseui/button"
import { Card, StyledBody, StyledAction } from "baseui/card"
import { Grid, Cell } from "baseui/layout-grid"
import StyledGatsbyLink from "../components/styledGatsbyLink"
import { StyledLink } from "baseui/link"
import { Block } from "baseui/block"
import { useStyletron } from "baseui"
import { Input } from "baseui/input"
import { Select } from "baseui/select"
import { ProgressSteps, Step } from "baseui/progress-steps"
import { ListItem, ListItemLabel } from "baseui/list"

export default function Home() {
  const [css, theme] = useStyletron()
  const [value, setValue] = useState("Text input")
  const [selectValue, setSelectValue] = useState([
    { label: "Aqua", id: "#00FFFF" },
  ])
  const [current, setCurrent] = useState(0)
  return (
    <Layout>
      <HeadingLevel>
        <Grid>
          <Cell span={12}>
            <Heading>Gatsby Starter Base Web</Heading>

            <Paragraph2>
              A minimal Gatsby starter based on Base Web from Uber. Should help
              you get a Gatsby based Base Web website going quickly.
            </Paragraph2>
            <HeadingLevel>
              <Heading>They have a number of nice components</Heading>
            </HeadingLevel>
            <Block paddingBottom={theme.sizing.scale600}>
              <StyledLink href="https://baseweb.design/" target="_blank">
                See much more in the documentation
              </StyledLink>
            </Block>
          </Cell>
          <Cell span={4}>
            <Card>
              <StyledBody>Nice cards</StyledBody>
              <StyledAction>
                <Button
                  overrides={{
                    BaseButton: { style: { width: "100%" } },
                  }}
                  onClick={() => alert("click")}
                >
                  Button Label
                </Button>
              </StyledAction>
            </Card>
          </Cell>
          <Cell span={4}>
            <Block paddingBottom={theme.sizing.scale400}>
              <Input
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Controlled Input"
                clearOnEscape
              />
            </Block>

            <Select
              options={[
                { label: "AliceBlue", id: "#F0F8FF" },
                { label: "AntiqueWhite", id: "#FAEBD7" },
                { label: "Aqua", id: "#00FFFF" },
                { label: "Aquamarine", id: "#7FFFD4" },
                { label: "Azure", id: "#F0FFFF" },
                { label: "Beige", id: "#F5F5DC" },
              ]}
              value={selectValue}
              placeholder="Select color"
              onChange={params => setSelectValue(params.value)}
            />
          </Cell>
          <Cell span={4}>
            <ProgressSteps current={current}>
              <Step title="Step 1: Go to Repo">
                <Paragraph3>
                  <StyledLink href="https://github.com/runningdeveloper/gatsby-starter-baseweb">
                    github.com/runningdeveloper/gatsby-starter-baseweb
                  </StyledLink>
                </Paragraph3>
                <Button size="compact" onClick={() => setCurrent(1)}>
                  Next
                </Button>
              </Step>
              <Step title="Step 2: Star/Comment Repo">
                <Paragraph3>
                  Please star or leave some issue for comment is welcome
                </Paragraph3>
                <Button size="compact" onClick={() => setCurrent(0)}>
                  Back
                </Button>
              </Step>
            </ProgressSteps>
          </Cell>
          <Cell span={12}>
            <HeadingLevel>
              <Heading>Gatsby Extras</Heading>
            </HeadingLevel>
            <Paragraph3>
              Still need to work on a few more Gatsby specific things.
            </Paragraph3>

            <ul
              className={css({
                paddingLeft: 0,
              })}
            >
              <ListItem>
                <ListItemLabel description="A Gatsby Link component wrapped in the baseweb styled link">
                  Styled Link e.g. -{" "}
                  <StyledGatsbyLink to="/page-2/">Page 2</StyledGatsbyLink>
                </ListItemLabel>
              </ListItem>
            </ul>

            {/* <Button as={StyledLink} href="/page/">A Button</Button> */}
          </Cell>
        </Grid>
      </HeadingLevel>
    </Layout>
  )
}
