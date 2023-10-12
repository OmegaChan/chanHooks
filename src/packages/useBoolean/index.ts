// 本质是调用了useToggle进行了true和false两个状态的切换
import { useMemo } from 'react';
import useToggle from '../useToggle';
import { type Actions } from './type';

export const useBoolean = (defaultValue = false): [boolean, Actions] => {
  const [state, { toggle, set }] = useToggle(!!defaultValue);

  const actions: Actions = useMemo(() => {
    const setTrue = (): void => set(true);
    const setFalse = (): void => set(false);
    return {
      toggle,
      // 强制转换为布尔型
      /*
      undefined和null为false。
      任意数组，对象，函数（函数是特殊的对象）都转化为true，即使是空数组，空对象。
      空字符串为false，非空字符串为true。
      数值正负0，不确定值(NaN)为false，其它为true,无穷大也是true。
       */
      set: (v) => set(!!v),
      setTrue,
      setFalse,
    };
  }, []);

  return [state, actions];
};
