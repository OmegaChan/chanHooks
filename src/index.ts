import { useEffect } from 'react';
import _ from 'lodash';
import { useTest } from '@/packages/useTest';
import useToggle from '@/packages/useToggle';
import { useBoolean } from '@/packages/useBoolean';
import { useSetState } from '@/packages/useSetState';
import { useUpdate } from '@/packages/useUpdate';
import { useMemoizedFn } from '@/packages/useMemoizedFn';
import { useLatest } from '@/packages/useLatest';
import { useMount } from '@/packages/useMount';
import { useUnmount } from '@/packages/useUnmount';
import { useGetTime } from '@/packages/useGetTime';
import { useStrAndObj } from '@/packages/useStrAndObj';
import { useMockApi } from '@/packages/useMockApi';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../package.json');
window._ = _;

// 由于useGetTime在此为非严格意义上的React Hooks，故在这里可以直接使用，而非要在React函数组件中使用
const { getDatePre, getDetailTime } = useGetTime();
const [, timeNow] = getDatePre({
  preNum: 0,
});

window.onload = () => {
  console.log(
    `✨✨✨chanHooks已生效-版本号:${version}-生效时间:${timeNow}-${getDetailTime()}`,
  );
};

export {
  useTest,
  useToggle,
  useBoolean,
  useSetState,
  useUpdate,
  useMemoizedFn,
  useLatest,
  useMount,
  useUnmount,
  useGetTime,
  useStrAndObj,
  useMockApi,
};
