import React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import "./layout.css"
import LinkData from "../links.json"
import MyLink from "./mylink"

const Layout = ({ children }) => {
  return (
    <>
      <div className='bg-white dark:bg-gray-800 flex'>
        <div
          className='items-center dark:bg-gray-800 w-full'
          style={{
            maxWidth: `680px`,
            padding: `24px 12px`,
            margin: `0px auto 0 auto`,
            textAlign: `center`,
            alignItems: `center`,
          }}
        >
          <main>{children}
            <div className='flex flex-wrap -mx-2 overflow-hidden'
              style={{
                alignItems: `center`,
                justifyContent: `center`,
                paddingTop: `20px`
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

              <h1 className="my-2 px-2 w-full overflow-hidden text-black dark:text-white">Jake Renzella</h1>
              <p className="my-2 px-2 w-full overflow-hidden text-black dark:text-white">Lecturer in the School of Computer Science and Engineering, UNSW Sydney.</p>
              <p className="my-2 px-2 w-full overflow-hidden text-black dark:text-white">Computer Science Education, EdTech, AI4EDU.</p>

              <h1 className="mt-8 my-2 px-2 w-full overflow-hidden text-black dark:text-white">Recent Publication</h1>
              {LinkData.Papers.map((data, index) => {
                return <div key={data.linkTitle} className="my-2 px-2 w-full overflow-hidden"><MyLink linkData={data} /></div>
              })}


              <h1 className="mt-8 my-2 px-2 w-full overflow-hidden text-black dark:text-white">Socials</h1>
              {LinkData.Socials.map((data, index) => {
                return <div key={data.linkTitle} className="my-2 px-2 w-full overflow-hidden"><MyLink linkData={data} /></div>
              })}

              <h1 className="mt-8 my-2 px-2 w-full overflow-hidden text-black dark:text-white">Education Tools</h1>
              {LinkData.Education.map((data, index) => {
                return <div key={data.linkTitle} className="my-2 px-2 w-full overflow-hidden"><MyLink linkData={data} /></div>
              })}

              <h1 className="mt-8 my-2 px-2 w-full overflow-hidden text-black dark:text-white">UNSW Teaching</h1>
              {LinkData.Teaching.map((data, index) => {
                return <div key={data.linkTitle} className="my-2 px-2 w-full overflow-hidden"><MyLink linkData={data} /></div>
              })}



              <h1 className="mt-8 my-2 px-2 w-full overflow-hidden text-black dark:text-white">Academic</h1>
              {LinkData.Academic.map((data, index) => {
                return <div key={data.linkTitle} className="my-2 px-2 w-full overflow-hidden"><MyLink linkData={data} /></div>
              })}

              <h1 className="mt-8 my-2 px-2 w-full overflow-hidden text-black dark:text-white">Development</h1>
              {LinkData.Development.map((data, index) => {
                return <div key={data.linkTitle} className="my-2 px-2 w-full overflow-hidden"><MyLink linkData={data} /></div>
              })}
            </div>
          </main>
          <footer className="pb-4 mt-4 text-black dark:text-white">
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
