import { useCallback, useState } from "react";
import { isFunction } from '@/utils/index';
import { SetState } from './type';
// 管理 object 类型 state 的 Hooks,使用--会自动合并对象
// const [state, setState] = useSetState<T>(initialState);

// 定义返回值中 setState 数据类型，接受泛型S，是一个键值对的对象
// 该函数接受state, 可接收三种数据类型 1. 泛型K的子集(自动合并对象), null, 或者回调函数
// 该回调函数，接收一个只读的前置对象，返回新的对象，该对象数据类型为S的子集或S或null
// export type SetState<S extends Record<string, any>> = <K extends keyof S>(
//   state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null)
// ) => void;

export const useSetState = <S extends Record<string, any>>(
  initialState: S | (() => S)
): [S, SetState<S>] => {
  const [state, setState] = useState<S>(initialState);

  const setMergeState = useCallback((patch: unknown) => {
    setState((prevState) => {
      const newState = isFunction(patch) ? patch(prevState) : patch;
      return newState ? { ...prevState, ...newState } : prevState;
    });
  }, []);

  return [state, setMergeState];
};

