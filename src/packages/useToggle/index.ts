import { useMemo, useState } from "react";
import { Actions } from './type';

// 函数的重载签名。根据传入的参数类型和数量，该函数可以有三种不同的调用方式，并返回不同类型的值。
function useToggle<T = boolean>(): [boolean, Actions<T>];

function useToggle<T>(defaultValue: T): [T, Actions<T>];

function useToggle<T, U>(
  defaultValue: T,
  reverseValue: U
): [T | U, Actions<T | U>];

// 当不传泛型D的时候，会自动推导成unknown，此处给defaultValue赋予默认值D，先断言成unknown, 最后再次断言成D，
// 将 false 转换为与 D 类型相兼容的默认值，以便在没有明确提供 defaultValue 参数时，为泛型 D 提供一个合理的默认值。
function useToggle<D, R>(
  defaultValue: D = (false as unknown) as D,
  reverseValue?: R
) {
  const [state, setState] = useState<D | R>(defaultValue);

  const actions = useMemo(() => {
    const reverseValueOrigin = (reverseValue === undefined
      ? !defaultValue
      : reverseValue) as D | R;

    // 没传相反值的时候，直接对默认值取反 例 const a = "abc" console.log(!a) // false
    const toggle = () =>
      setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    const set = (value: D | R) => setState(value);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);

    return {
      toggle,
      set,
      setLeft,
      setRight
    };
    // 无依赖项，toggle中采用回调函数的形式取state, 故useMemo中不设置依赖项，也能读到最新state
  }, []);

  return [state, actions];
}

export default useToggle;
