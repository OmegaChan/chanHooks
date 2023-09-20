// 定义函数isFunction判断入参是否为函数，is 关键字一般用于函数返回值类型中，
// 判断参数是否属于某一类型，并根据结果返回对应的布尔类型。
export const isFunction = (value: unknown): value is (...args: any) => any =>
  typeof value === "function";
