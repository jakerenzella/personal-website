import React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import "./layout.css"
import LinkData from "../links.json"
import MyLink from "./mylink"

const Layout = ({ children }) => {
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

              <h1 className="mt-8 my-2 px-2 w-full overflow-hidden">Socials</h1>
              {LinkData.Socials.map((data, index) => {
                return <div className="my-2 px-2 w-full overflow-hidden"><MyLink linkData={data} /></div>
              })}

              <h1 className="mt-8 my-2 px-2 w-full overflow-hidden">UNSW Teaching</h1>
              {LinkData.Teaching.map((data, index) => {
                return <div className="my-2 px-2 w-full overflow-hidden"><MyLink linkData={data} /></div>
              })}

              <h1 className="mt-8 my-2 px-2 w-full overflow-hidden">Education</h1>
              {LinkData.Education.map((data, index) => {
                return <div className="my-2 px-2 w-full overflow-hidden"><MyLink linkData={data} /></div>
              })}

              <h1 className="mt-8 my-2 px-2 w-full overflow-hidden">Academic</h1>
              {LinkData.Academic.map((data, index) => {
                return <div className="my-2 px-2 w-full overflow-hidden"><MyLink linkData={data} /></div>
              })}

              <h1 className="mt-8 my-2 px-2 w-full overflow-hidden">Development</h1>
              {LinkData.Development.map((data, index) => {
                return <div className="my-2 px-2 w-full overflow-hidden"><MyLink linkData={data} /></div>
              })}
            </div>
          </main>
          <footer className="mt-4">
            Jake Renzella © {new Date().getFullYear()}
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
