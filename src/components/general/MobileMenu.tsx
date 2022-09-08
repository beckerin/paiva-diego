import React from "react";
import NavbarList from "../navbar/NavbarList";

export default (props: any) => {
  const showMenu = props.showMenu;
  const setIsMenuLink = props.setIsMenuLink;
  const menus = props.menu;
  var className = showMenu ? "block " : "hidden ";
  className +=
    "h-full w-full fixed p-8 z-[100] bg-black/40 flex items-center justify-center";

  return (
    <div className={className}>
      <NavbarList
        items={menus}
        className="flex flex-col gap-8 text-xl text-center"
        isMenuLink={showMenu}
        setIsMenuLink={setIsMenuLink}
      />
    </div>
  );
};
