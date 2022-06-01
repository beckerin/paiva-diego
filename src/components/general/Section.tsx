import React from "react"

export default (props: any) => {
  const className = props.className ? props.className : ''
  
  return <section className={className}>
    {props.children}
  </section>
}