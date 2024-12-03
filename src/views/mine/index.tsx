import React, { FC, memo, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = memo(() => {
  return <div>Mine</div>
})

export default Mine
