import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="l-footer">
    <div class="c-grid__container">
      <div className="c-grid__row">
        <div className="c-grid__block-12">
          <p className="l-footer__copyright">
            &copy; {new Date().getFullYear()}, IMAI RISAKO.
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
