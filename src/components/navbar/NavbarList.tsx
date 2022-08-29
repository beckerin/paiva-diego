import React from "react";
import NavBarItem from "./NavbarItem";
import LanguageList from "../language/LanguageList";

export default (props: any) => {
  const items = props.items;

  return (
    <ul className="navbar__list flex md:w-8/12 lg:w-6/12 w-11/12 justify-around items-center">
      {items.map((item: any) => (
        <NavBarItem key={item.id} item={item} />
      ))}
      <LanguageList />
    </ul>
  );
};
