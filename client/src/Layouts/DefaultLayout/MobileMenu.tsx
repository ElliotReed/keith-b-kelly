import React from "react"

import Nav from "./Nav"

import * as style from "./MobileMenu.module.scss"

interface Props {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileMenu({ isActive, setIsActive }: Readonly<Props>) {
  let offCanvasStyle = `${style.offCanvasContainer} ${isActive ? style.openNav : ""
    }`

  return (
    <aside className={offCanvasStyle}>
      <div className={style.offscreenNavWrapper}>
        <Nav setIsActive={setIsActive} />
      </div>
    </aside>
  )
}
