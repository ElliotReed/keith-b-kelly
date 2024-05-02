import * as React from "react"

import MaxWidthContainer from "./MaxWidthContainer"
import * as style from "./item-block.module.scss"

interface Props {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
}

export default function ItemBlock({ children, color = "secondary" }: Readonly<Props>) {
  let backgroundColorStyle = style.secondary
  if (color === "primary") {
    backgroundColorStyle = style.primary
  }
  console.log(color)
  return (
    <div className={backgroundColorStyle}>
      <MaxWidthContainer>
        <div className={style.paddedContainer}>{children}</div>
      </MaxWidthContainer>
    </div>
  )
}
