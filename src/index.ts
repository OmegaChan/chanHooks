import _ from 'lodash';
window._ = _;
import { useTest } from '@/packages/useTest';
import useToggle from '@/packages/useToggle';
import { useBoolean } from '@/packages/useBoolean';
import { useSetState } from '@/packages/useSetState';
import { useUpdate } from '@/packages/useUpdate';
import { useMemoizedFn } from '@/packages/useMemoizedFn';
import { useLatest } from '@/packages/useLatest';
import { useMount } from '@/packages/useMount';
import { useUnmount } from '@/packages/useUnmount';
console.log('chanHooks导入成功了-29');

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
}
