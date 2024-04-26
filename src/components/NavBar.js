import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const list = links.map((name, index) => (
    <nav key={index}>
      <a href={`#${name}`}>{name}</a>
    </nav>
  ));

  return <div>{list}</div>;
}

export default NavBar;
