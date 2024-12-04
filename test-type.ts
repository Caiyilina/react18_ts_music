// 定义函数的类型，包括参数和返回值
interface IFnCall {
  <Type>(fn: () => Type, age: number): Type
}

const foo: IFnCall = (fn, age) => {
  return fn()
}
foo<String>(() => "hello", 18)

// 不传入类型，TS会推导出来
foo(() => "hello", 18)
