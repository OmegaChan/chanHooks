import { useRef } from "react";

// 返回当前最新值的 Hook，避免闭包问题。
export const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;

  return ref;
};
