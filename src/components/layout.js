import React from "react"
import PropTypes from "prop-types"
import { BaseProvider } from "baseui"
import { useStaticQuery, graphql } from "gatsby"
import { Block } from "baseui/block"
import { Paragraph3 } from "baseui/typography"
import { StyledLink } from "baseui/link"
import Header from "./header"
import { customTheme } from "./theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <BaseProvider theme={customTheme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Block>{children}</Block>
      <Block
        as="footer"
        display="flex"
        alignContent="center"
        justifyContent="flex-end"
        alignItems="center"
        margin="100px"
      >
        <Paragraph3 paddingRight="20px">
          © {new Date().getFullYear()}, Built with
          {` `}
          <StyledLink href="https://www.gatsbyjs.org">Gatsby</StyledLink>
        </Paragraph3>
      </Block>
    </BaseProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
