import React, { useState } from 'react';


export default (props: any) => {
  const [isActive, setActive] = useState(false)
  const classes = props.className ?  props.className : ""

  return (
    <a 
      href={props.href}
      target={props.target ? props.target : '_blank'}
      className={isActive ? classes + " secondary" : classes}
      onMouseEnter={() => { setActive(true) }}
      onMouseLeave={() => { setActive(false) }}
    >
      {props.children}
    </a>
  )
}