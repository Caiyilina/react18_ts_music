import React, { FC, memo, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = memo(() => {
  return <div>Album</div>
})

export default Album
