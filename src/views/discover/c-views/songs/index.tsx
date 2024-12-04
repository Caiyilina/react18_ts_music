import React, { FC, memo, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = memo(() => {
  return <div>Songs</div>
})

export default Songs
