import React, { useState } from "react"

import "./css/Navbar.css"

export default function Navbar(props) {
  const items = ["home", "about", "projects", "contact"]
  const [ulLeft, setUlLeft] = useState(0)
  const [selected, setSelected] = useState(0)

  function buttonPress(e, i) {
    setSelected(i)
  }


  return (
    <nav className="navbar">
      <img src="/imgs/flip.jpg" alt="me but upside down!"></img>
      <ul
      ref={el => {
        if(!el) return;
        console.log(el.getClientRects()[0].left)
        setUlLeft(el.getClientRects()[0].left)
      }}
      >
        {
          items.map((item, i) => <li><button onClick={(e) => buttonPress(e, i)}>{item}</button></li>)
        }
      </ul>
      <div
      className="pointer"
      style={{left: ulLeft - 4 + (200*selected)}}
      ></div>
    </nav>
  )
}