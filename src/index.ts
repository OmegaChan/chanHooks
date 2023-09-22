import _ from 'lodash';
window._ = _;
import { useTest } from '@/packages/useTest';
import useToggle from '@/packages/useToggle';
import { useBoolean } from '@/packages/useBoolean';
import { useSetState } from '@/packages/useSetState';
import { useUpdate } from '@/packages/useUpdate';
import { useMemoizedFn } from '@/packages/useMemoizedFn';
console.log('chanHooks导入成功了-28');

export {
    useTest,
    useToggle,
    useBoolean,
    useSetState,
    useUpdate,
    useMemoizedFn,
}
