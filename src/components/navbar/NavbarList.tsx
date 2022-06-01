import React from "react"
import NavBarItem from "./NavbarItem"

export default (props: any) => {
  const items = props.items

  return (
    <ul className="navbar__list flex md:w-3/12 w-8/12 justify-around items-center">
      {items.map((item: any) => (
        <NavBarItem key={item.id} item={item} />
      ))}
    </ul>
  )
}