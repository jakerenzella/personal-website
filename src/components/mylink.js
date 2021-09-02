import React from "react"
import { Icon } from '@iconify/react';

function MyLink({ linkData }) {
  return (
    <a
      href={linkData.linkURL}
      target="_blank"
      className="
      flex text-base text-white dark:text-black
      bg-indigo-600 dark:bg-indigo-200
      border-white dark:border-indigo-200
      transition duration-300 ease-in-out
      hover:bg-white border-2 hover:border-indigo-600 hover:text-indigo-600
      dark:hover:bg-transparent
      dark:hover:text-black dark:hover:border-indigo-200 dark:hover:text-indigo-200"
      style={{ width: `100%`, height: `56px`, alignItems: `center`, justifyContent: `center` }}>

      <Icon
        icon={linkData.iconName}
        width="28"
        height="28"
        className="flex-none ml-6" />
      <p style={{ width: `100%`, marginLeft: `-50px` }} className="" >{linkData.linkTitle}</p>
    </a>
  )
}

export default MyLink
