## hooks列表

### 状态hooks

#### useToggle

##### 概括

两个状态值间切换的 Hook。

##### 用法

```typescript
const [state, { toggle, set, setLeft, setRight }] = useToggle(defaultValue?: boolean);
const [state, { toggle, set, setLeft, setRight }] = useToggle<T>(defaultValue: T);
const [state, { toggle, set, setLeft, setRight }] = useToggle<T, U>(defaultValue: T, reverseValue: U);
```

##### 参数

###### Params

| 参数         | 说明                     | 类型 | 默认值  |
| ------------ | ------------------------ | ---- | ------- |
| defaultValue | 可选项，传入默认的状态值 | `T`  | `false` |
| reverseValue | 可选项，传入取反的状态值 | `U`  | -       |

###### Result

| 参数    | 说明     | 类型      |
| ------- | -------- | --------- |
| state   | 状态值   | -         |
| actions | 操作集合 | `Actions` |

###### Actions

| 参数     | 说明                                                         | 类型                     |
| -------- | ------------------------------------------------------------ | ------------------------ |
| toggle   | 切换 state                                                   | `() => void`             |
| set      | 修改 state                                                   | `(state: T | U) => void` |
| setLeft  | 设置为 defaultValue                                          | `() => void`             |
| setRight | 如果传入了 reverseValue, 则设置为 reverseValue。 否则设置为 defaultValue 的反值 | `() => void`             |

#### useBoolean

##### 概括

管理 boolean 状态的 Hook

##### 用法

```typescript
const [state, { toggle, set, setTrue, setFalse }] = useBoolean(
  defaultValue?: boolean,
);
```

##### 参数

###### Params

###### Result

###### Actions

#### useSetState

#### useUpdate

#### useLatest

### 生命周期hooks

#### useMount

#### useUnmount

### 增进型hooks

#### useMemoizedFn

### 工具hooks

#### useGetTime

#### useStrAndObj

#### useMockApi
