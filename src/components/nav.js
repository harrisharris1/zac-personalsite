import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/layout.css"
import "../styles/media.css"

const Nav = () => (
  <>
  <div className="zacsName">
    <h1>Zac Harris</h1>
  </div>
  <div className="burgerMenu">

  </div>
    
  </>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
