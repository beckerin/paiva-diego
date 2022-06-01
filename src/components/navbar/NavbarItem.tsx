import React from "react"
import { useState } from "react"
import Link from "../general/Link"

export default (props: any) => {
  const item = props.item

  const [isActive, setActive] = useState(item.isActive)
  const classes = props.className ? "navbar__item " + props.className : "navbar__item"


  return (
    <li>
      <Link href={'#' + item.route} target="_self" className={classes}>
        {item.title}
      </Link>
    </li>
  )
}
