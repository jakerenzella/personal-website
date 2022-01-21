import React from "react"
import { Icon } from '@iconify/react';

function MyLink({ linkData }) {
  return (
    <a
      href={linkData.linkURL}
      target="_blank"
      className="bg-indigo-600 flex text-base"
      style={{ width: `100%`, height: `56px`, alignItems: `center`, justifyContent: `center`, color: `white`, fontFamily: `monospace` }}>

      <Icon
        icon={linkData.iconName}
        width="28"
        height="28"
        className="flex-none ml-6" />
      <p style={{ width: `100%`, marginLeft: `-48px` }} className="" >{linkData.linkTitle}</p>
    </a>
  )
}

export default MyLink
