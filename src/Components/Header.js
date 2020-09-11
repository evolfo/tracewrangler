import React from "react"

const Header = () => {
  const handleMiniHeaderClick = (e) => {
      const miniHeader = document.querySelector(".mini-header > ul")
      const hiddenHeaderDiv = document.querySelector(".hidden-header-div")

      if (e.target.textContent === "X" || e.target.className === "hidden-header-div") {
          miniHeader.style.display = "none"
          hiddenHeaderDiv.style.display = "none"
      } else if (e.target.className === "hamburger-icon") {
          miniHeader.style.display = "flex"
          hiddenHeaderDiv.style.display = "block"
      }
  }

  return (
    <>
        <header className="big-header">
            <ul>
                <a href="#features"><li>
                    <h3>About</h3>
                </li></a>
                <a href="#"><li>
                    <h3>Documentation</h3>
                </li></a>
                <li>
                    <a href="/">
                        <img src="/img/logo.png" alt="Tracewrangler Logo" />
                    </a>
                </li>
                <a href="#download"><li>
                    <h3>Download</h3>
                </li></a>
                <a href="#"><li>
                    <h3>Contact</h3>
                </li></a>
            </ul>
        </header>
        <header className="mini-header" onClick={handleMiniHeaderClick}>
            <a href="/">
                <img src="/img/logo.png" alt="Tracewrangler Logo" />
            </a>
            <img className="hamburger-icon" src="/img/hamburger.png" alt="Hamburger"/>
            <ul>
                <li>X</li>
                <a href="#features"><li>
                    <h3>About</h3>
                </li></a>
                <a href="#"><li>
                    <h3>Documentation</h3>
                </li></a>
                <a href="#download"><li>
                    <h3>Download</h3>
                </li></a>
                <a href="#"><li>
                    <h3>Contact</h3>
                </li></a>
            </ul>
            <div className="hidden-header-div"></div>
        </header>
    </>
  )
}

export default Header
