import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarList from "./NavbarList";

export default (props: any) => {
  const showMenu = props.showMenu;
  const setShowMenu = props.setShowMenu;
  const menus = props.menu;

  return (
    <div>
      <div className="navbar bg-stone-800 md:px-16 px-4 sticky top-0 z-10 px-auto md:flex hidden justify-between">
        <NavbarLogo />
        <NavbarList
          items={menus}
          className="navbar__list flex md:w-8/12 lg:w-6/12 w-11/12 justify-around items-center"
        />
      </div>
      <div className="fixed z-[50] bg-stone-800 w-full md:hidden flex justify-between px-4">
        <NavbarLogo />
        <div className="mt-4">
          <button onClick={() => setShowMenu(!showMenu)}>
            <img src="../img/bars-solid.svg" className="h-12" />
          </button>
        </div>
      </div>
    </div>
  );
};
