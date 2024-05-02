import * as React from "react"

import Nav from "./Nav"
import Logo from "./Logo"
import * as style from "./Header.module.scss"

interface Props {
  siteTitle: string
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ siteTitle, isActive, setIsActive }: Props) => {
  let hamburgerStyle = `${style.hamburger} ${style.hamburgerSqueeze} ${isActive ? style.isActive : ""
    }`

  return (
    <header className={style.header}>
      <Logo siteTitle={siteTitle} />
      <div className={style.mainNavWrapper}>
        <Nav setIsActive={setIsActive} />
      </div>
      <button title="Show menu"
        className={hamburgerStyle}
        type="button"
        onClick={() => setIsActive(!isActive)}
      >
        <span className={style.hamburgerBox}>
          <span className={style.hamburgerInner}></span>
        </span>
      </button>
    </header>
  )
}


export default Header
