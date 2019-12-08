import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ogimage from "../images/ogp.png"

const IndexPage = () => (
  <Layout>
    <SEO
      title='IMAI RISAKO - Web designer'
      description='Web designer, UI designer and programming fan in Nagoya,Japan.'
      image={ogimage}
    />
    <div className="c-grid__container">
      <div className="c-grid__row">
        <div className="c-grid__block-12">
          <section className="l-main__profile">
            <h2 className="l-main__lead">
              Freelance web designer, UI designer and web developer.
              <br />
              I live in Nagoya, Japan.
            </h2>
            <ul className="l-main__list">
              <li className="l-main__list-item">
                <a href="https://asagi-design.com">Asagi Design / My business website</a>
              </li>
              <li className="l-main__list-item">
                <a href="https://www.slideshare.net/r1sak0">SlideShare(@r1sak0)</a>
              </li>
              <li className="l-main__list-item">
                <a href="https://twitter.com/i_mairy">Twitter(@i_mairy)</a>
              </li>
              <li className="l-main__list-item">
                <a href="https://www.facebook.com/imairisako">Facebook(@imairisako)</a>
              </li>
              <li className="l-main__list-item">
                <a href="https://www.instagram.com/i_mairy/">Instagram(@i_mairy)</a>
              </li>
              <li className="l-main__list-item">
                <a href="mailto:info@asagi-design.com">E-mail</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
