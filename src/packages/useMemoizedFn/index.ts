/**
 * 持久化 function 的 Hook
 * 使用 useCallback 来记住一个函数，但是在第二个参数 deps 变化时，会重新生成函数，导致函数地址变化。
 * 使用 useMemoizedFn，可以省略第二个参数 deps，同时保证函数地址永远不会变化。
 * 与 useCallback 可以实现同样的效果, 但是useMemoizedFn 函数地址不会变化，可以用于性能优化
 */
import { useMemo, useRef } from "react";
import { isFunction, isDev } from '@/utils/index';
import { Noop, PickFunction } from './type';

console.log({ isDev });

export const useMemoizedFn = <T extends Noop>(fn: T) => {
  if (isDev) {
    // 开发环境会检测入参是否为函数，给出相应错误提示
    if (!isFunction(fn)) {
      console.error(
        `useMemoizedFn expected parameter is a function, got ${typeof fn}`
      );
    }
  }
  const fnRef = useRef<T>(fn);

  // why not write `fnRef.current = fn`? -- 解决在 react devtool 的异常问题
  // https://github.com/alibaba/hooks/issues/728
  // https://github.com/alibaba/hooks/issues/1347
  fnRef.current = useMemo(() => fn, [fn]);

  // useRef 用于在组件的渲染之间保持对该函数的引用
  const memoizedFn = useRef<PickFunction<T>>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args);
    };
  }

  return memoizedFn.current as T;
}
 
 