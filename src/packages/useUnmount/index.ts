import { useEffect } from 'react';
import { isFunction, isDev } from '@/utils/index';
import { useLatest } from '../useLatest';
import { type FnVoid } from '../../type';

// 由于react18在开发模式挂载时，会自动卸载一次，所以需关闭严格模式
console.log({ isDev });

export const useUnmount = (fn: FnVoid): void => {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(
        `useUnmount expected parameter is a function, got ${typeof fn}`,
      );
    }
  }

  // 是在组件卸载（销毁）时被调用的。这种情况下，通过 useLatest 获取到的最新版本的 fn 可能和组件卸载时需要的 fn 不一样了。这就是为什么useUnmount 会使用 useLatest。
  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );
};
