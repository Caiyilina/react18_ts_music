import React, { FC, memo, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = memo(() => {
  return <div>Home</div>
})

export default Home
