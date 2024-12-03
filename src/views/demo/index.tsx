
import React, { memo, ReactNode } from 'react'


interface IProps{
  name:string,
  age:number,
  children?:ReactNode
}

// 写法1
// const Demo = memo((props : IProps) => {
//   return (
//     <div>
//       Demo
//       <p>name:{props.name},age:{props.age}</p>
//     </div>
//   )
// })
// 写法2，React.FC<IProps>或者React.FunctionComponent<IProps>
const Demo : React.FC<IProps> = memo((props ) => {
    return (
      <div>
        Demo
        <p>name:{props.name},age:{props.age}</p>
        <div>{props?.children}</div>
      </div>
    )
  })

  Demo.defaultProps = {
    name:"cyl",
    age:18
  }

export default Demo
