import React, { PureComponent, ReactNode } from "react"

interface IProps {
  name: string
  age?: number
  children?: ReactNode
}
interface IState {
  message: string
}

interface ISnapshot {
  address: string
}

export default class DemoClass extends PureComponent<IProps, IState, ISnapshot> {
  // 定义state方式1，使用constructor
  // constructor(props: IProps) {
  //   super(props)
  //   this.state = {
  //     message: "hello"
  //   }
  // }
  // 定义state方式2，使用state
  state: IState = {
    message: "hello222"
  }
  //
  getSnapshotBeforeUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: ISnapshot
  ): ISnapshot | null {
    return {
      address: "上海"
    }
  }
  render() {
    return (
      <div>
        <p>
          name:{this.props.name},age:{this.props.age}
        </p>
        <p>message:{this.state.message}</p>
        DemoClass
        <hr />
      </div>
    )
  }
}
