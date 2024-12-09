import React, { FC, memo, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = memo(() => {
  return <div>AppFooter</div>
})

export default AppFooter
