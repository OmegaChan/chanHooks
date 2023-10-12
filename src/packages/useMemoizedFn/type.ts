// 类型noop, 函数，接收this及其他函数，返回any
export type Noop = (this: any, ...args: any[]) => any;

// 类型PickFunction 接收泛型T，T继承自noop
export type PickFunction<T extends Noop> = (
  // this被重新定义为ThisParameterType<T>，表示函数内部的this上下文类型与T的this上下文类型相同；
  this: ThisParameterType<T>,
  // ...args是一个参数数组，其类型与T的参数类型一致（Parameters<T>）
  ...args: Parameters<T>
) => // 返回值的类型与T的返回值类型相同（ReturnType<T>）
ReturnType<T>;
