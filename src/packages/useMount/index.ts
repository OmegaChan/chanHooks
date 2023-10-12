import { useEffect } from 'react';
import { isFunction, isDev } from '@/utils/index';
import { type FnVoid } from '../../type';

console.log({ isDev });

export const useMount = (fn: FnVoid): void => {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(
        `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
      );
    }
  }

  useEffect(() => {
    fn?.();
  }, []);
};
