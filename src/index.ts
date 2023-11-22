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
window._ = _;

console.log('chanhooks导入成功');

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
};
