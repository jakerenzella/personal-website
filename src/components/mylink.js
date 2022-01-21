import React from "react"

function MyLink({ linkTitle, linkUrl }) {
    return (
        <a
            href={linkUrl}
            target="_blank"
            className="bg-indigo-600 flex text-base"
            style={{width: `100%`, height:`56px`, alignItems: `center`, justifyContent: `center`, color: `white`, fontFamily: `monospace`}}>
            <svg
                style={{marginLeft: `20px`}}
                className="flex-none w-6 h-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>

            <p style={{width: `100%`, marginLeft: `-45px`}} className="" >{linkTitle}</p>
        </a>
    )
}

export default MyLink
