import React from "react"
import { Link } from "gatsby"
import { useStyletron } from "baseui"

const StyledGatsbyLink = ({ children, ...props }) => {
  const [css, theme] = useStyletron()

  return (
    <Link
      {...props}
      className={css({
        ...theme.typography.font350,
        color: theme.colors.linkText,
        ":hover": {
          color: theme.colors.linkHover,
          backgroundSize:
            theme.direction === "rtl"
              ? "0% 100%, 100% 100%"
              : "100% 100%, 100% 100%",
        },
        ":focus": {
          // outline: $isFocusVisible ? `3px solid ${theme.colors.accent}` : 'none',
          outlineOffset: "1px",
          textDecoration: "none",
        },
        ":visited": {
          color: theme.colors.linkVisited,
        },
        ":active": {
          color: theme.colors.linkActive,
        },
      })}
    >
      {children}
    </Link>
  )
}

export default StyledGatsbyLink
