import React, { FC, memo, ReactNode } from "react"
import { PlayerWrapper } from "./style"

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = memo(() => {
  return <PlayerWrapper>Player</PlayerWrapper>
})

export default Player
