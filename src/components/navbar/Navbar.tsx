import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarList from "./NavbarList";

export default () => {
  const menus = [
    {
      id: "item1",
      title: "navbar.home",
      route: "home",
    },
    {
      id: "item2",
      title: "navbar.projects",
      route: "projects",
    },
    {
      id: "item3",
      title: "navbar.about",
      route: "about",
    },
    {
      id: "item4",
      title: "navbar.contact",
      route: "contact",
    },
  ];

  return (
    <div className="navbar bg-stone-800 md:px-16 px-4 sticky top-0 z-10 px-auto flex justify-between">
      <NavbarLogo />
      <NavbarList items={menus} />
    </div>
  );
};
