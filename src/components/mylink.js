import React from "react"

import { StaticImage } from "gatsby-plugin-image"

function MyLink({ linkData }) {
    return (
        <a
            href={linkData.linkUrl}
            target="_blank"
            className="bg-indigo-600 flex text-base"
            style={{ width: `100%`, height: `56px`, alignItems: `center`, justifyContent: `center`, color: `white`, fontFamily: `monospace` }}>

            <StaticImage
                className="flex-none w-6 h-6 fill-current ml-7"
                style={{ borderRadius: `50%` }}
                src="../images/icons/logo-github.svg"
                alt="Jake Renzella headshot"
                placeholder="blurred"
                layout="fixed"
                width={20}
                height={20}
            />

            <p style={{ width: `100%`, marginLeft: `-45px` }} className="" >{linkData.linkTitle}</p>
        </a>
    )
}

export default MyLink
