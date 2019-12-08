import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import icon from "../images/icon.png"
import ogimage from "../images/ogp.png"

const Header = ({ siteTitle }) => (
  <header className="l-header">
    <div className="c-grid__container">
      <div className="c-grid__row">
        <div className="c-grid__block-12">
          <picture>
            <img className="l-header__image" src={icon} alt="" width="150" height="150" />
          </picture>
          <h1 className="l-header__title">
            IMAI RISAKO
          </h1>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
