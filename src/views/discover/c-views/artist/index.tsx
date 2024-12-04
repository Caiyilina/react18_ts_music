import React, { FC, memo, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = memo(() => {
  return <div>Artist</div>
})

export default Artist
