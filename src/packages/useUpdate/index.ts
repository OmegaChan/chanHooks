import { useCallback, useState } from "react";

// 强制组件重新渲染。
export const useUpdate = () => {
  const [, setState] = useState({});
  const update = useCallback(() => setState({}), []);
  return {
    update,
  };
};
