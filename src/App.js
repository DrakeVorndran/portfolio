import Navbar from "./components/Navbar"
import "./css/App.css"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { useEffect, useState } from "react"



function App() {
  const [selected, setSelected] = useState(0)
  const [container, setContainer] = useState({})
  useEffect(() => {
    if (container.style) {
      console.log(container.firstChild.getClientRects()[0].width)
      container.style.left = `${selected * (window.innerWidth + 300) * -1 - 150}px`
    }
  }, [container.style, selected])
  return (
    <div className="App">
      <Navbar selected={selected} setSelected={setSelected} />
      <div className="page-container"
        ref={(el) => {
          if (!el) return
          setContainer(el)
        }}
      >
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
