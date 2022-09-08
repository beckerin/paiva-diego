import React from "react";
import NavBarItem from "./NavbarItem";
import LanguageList from "../language/LanguageList";

export default (props: any) => {
  const items = props.items;
  const className = props.className;
  const isMenuLink = props.isMenuLink;
  const setIsMenuLink = props.setIsMenuLink;

  return (
    <ul className={className}>
      {items.map((item: any) => (
        <NavBarItem
          key={item.id}
          item={item}
          isMenuLink={isMenuLink}
          setIsMenuLink={setIsMenuLink}
        />
      ))}
      <LanguageList />
    </ul>
  );
};
