import React from "react";

import Logo from "../images/troll-face.png"

export default function Header() {

  
  return (
    <header className="header">
      <img src={Logo} alt="logo" className="header-image" />
      <h1 className="header-title">Meme Generator</h1>
      <h4 className="header-project">React Course - project 3</h4>
    </header>
  )
}