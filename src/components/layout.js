/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./layout.css"
import LinkData from "../links.json"
import MyLink from "./mylink"

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
    <>
      <div className='bg-white dark:bg-gray-800'>
        <div
          className='items-center bg-white dark:bg-gray-800'
          style={{
            maxWidth: `680px`,
            margin: `12px auto`,
            textAlign: `center`,
            alignItems: `center`,
          }}
        >
          <main>{children}
            <div className='flex flex-wrap -mx-2 overflow-hidden '
              style={{
                alignItems: `center`,
                justifyContent: `center`,
                paddingTop: `12px`
              }}>
              <StaticImage
                style={{ borderRadius: `50%` }}
                src="../images/jake-photo.png"
                alt="Jake Renzella headshot"
                placeholder="blurred"
                layout="fixed"
                width={110}
                height={110}
              />

              <h1 className="my-2 px-2 w-full overflow-hidden">Jake Renzella</h1>
              <p className="my-2 px-2 w-full overflow-hidden">Lecturer at UNSW</p>

              <h1 className="my-2 px-2 w-full overflow-hidden">Socials</h1>
              {LinkData.Socials.map((data, index) => {
                return <div className="my-2 px-2 w-full overflow-hidden"><MyLink linkTitle={data.linkTitle} linkUrl={data.linkURL} /></div>
              })}

              <h1 className="my-2 px-2 w-full overflow-hidden">Education</h1>
              {LinkData.Socials.map((data, index) => {
                return <div className="my-2 px-2 w-full overflow-hidden"><MyLink linkTitle={data.linkTitle} linkUrl={data.linkURL} /></div>
              })}

              <h1 className="my-2 px-2 w-full overflow-hidden">Academic</h1>
              {LinkData.Socials.map((data, index) => {
                return <div className="my-2 px-2 w-full overflow-hidden"><MyLink linkTitle={data.linkTitle} linkUrl={data.linkURL} /></div>
              })}

              <h1 className="my-2 px-2 w-full overflow-hidden">Development</h1>
              {LinkData.Socials.map((data, index) => {
                return <div className="my-2 px-2 w-full overflow-hidden"><MyLink linkTitle={data.linkTitle} linkUrl={data.linkURL} /></div>
              })}
            </div>
          </main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
