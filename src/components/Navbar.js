import React, { useState } from "react"

import "./css/Navbar.css"

export default function Navbar(props) {
  const items = ["home", "about", "projects", "contact"]
  const [ulLeft, setUlLeft] = useState(0)
  const {selected, setSelected} = props
  const [buttonWidth, setButtonWidth] = useState(0)

  function buttonPress(e, i) {
    setSelected(i)
    
  }

  React.useEffect(() => {
    const handleWindowResize = () => setUlLeft(0); setButtonWidth(0)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, []);


  return (
    <nav className="navbar">
      <img src="/imgs/flip.jpg" alt="me but upside down!"></img>
      <ul
        ref={el => {
          if (!el) return;
          setUlLeft(el.getClientRects()[0].left)
          setButtonWidth(el.firstChild.firstChild.getClientRects()[0].width)
        }}
      >
        {
          items.map((item, i) => <li><a href={`#`} onClick={(e) => buttonPress(e, i)}><p>{item}</p></a></li>)
        }
      </ul>
      <div
        className="pointer"
        style={{ left: ulLeft - 4 + (buttonWidth * selected), width: buttonWidth }}
      ></div>
    </nav>
  )
}