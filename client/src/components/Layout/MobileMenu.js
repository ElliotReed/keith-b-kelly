import React from "react"
import Nav from "./Nav"

import style from "./MobileMenu.module.scss"

export default function MobileMenu({ isActive, setIsActive }) {
  let offCanvasStyle = `${style.offCanvasContainer} ${
    isActive ? style.openNav : ""
  }`

  return (
    <aside className={offCanvasStyle}>
      <div className={style.offscreenNavWrapper}>
        <Nav />
      </div>
    </aside>
  )
}
