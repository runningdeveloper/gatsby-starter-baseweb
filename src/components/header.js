import React, { useState } from "react"
import { Unstable_AppNavBar as AppNavBar } from "baseui/app-nav-bar"
import { navigate } from "gatsby"
import PropTypes from "prop-types"

function renderItem(item) {
  return item.label
}

function isActive(arr, item, activeItem) {
  let active = false
  for (let i = 0; i < arr.length; i++) {
    const elm = arr[i]
    if (elm === item) {
      if (item === activeItem) return true
      return isActive((item && item.nav) || [], activeItem, activeItem)
    } else if (elm.nav) {
      active = isActive(elm.nav || [], item, activeItem)
    }
  }
  return active
}

const MAIN_NAV = [
  {
    item: { label: "Home", path: "/" },
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
  },
  {
    item: { label: "Page 2", path: "/page-2/" },
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
  },
]

const Header = ({ siteTitle }) => {
  const [mainNav] = useState(MAIN_NAV)
  const [activeNavItem, setActiveNavItem] = useState()

  return (
    <AppNavBar
      appDisplayName={siteTitle}
      mainNav={mainNav}
      isNavItemActive={({ item }) => {
        return item === activeNavItem || isActive(MAIN_NAV, item, activeNavItem)
      }}
      onNavItemSelect={async ({ item }) => {
        if (item === activeNavItem) return
        setActiveNavItem(item)
        if (item.item.path) {
          navigate(item.item.path)
        }
      }}
    />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Base Web`,
}

export default Header
