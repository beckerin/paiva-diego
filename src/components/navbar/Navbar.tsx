import React from "react"
import NavbarLogo from "./NavbarLogo"
import NavbarList from "./NavbarList"
import { useState } from "react"

export default () => {
  const menus = [
    {
      id: "item1",
      title: "Inicio",
      route: "home",
      isActive: true
    },
    {
      id: "item2",
      title: "Projetos",
      route: "projects",
      isActive: false
    },
    {
      id: "item3",
      title: "Sobre",
      route: "about",
      isActive: false
    },
    {
      id: "item4",
      title: "Contato",
      route: "contact",
      isActive: false
    }
  ]

  return (
    <div className="navbar bg-stone-800 md:px-16 px-4 sticky top-0 z-10 px-auto flex justify-between">
      <NavbarLogo />
      <NavbarList items={menus} />
    </div>
  )
}
