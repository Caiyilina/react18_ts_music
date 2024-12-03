import React, { FC, memo, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Focus: FC<IProps> = memo(() => {
  return <div>Focus</div>
})

export default Focus
