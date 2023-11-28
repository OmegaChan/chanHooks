import { useCallback } from 'react';
import { type MockApiProps, type ReturnMock } from './type';

type CallBackFunc = <T>(props: MockApiProps<T>) => Promise<T>;

export const useMockApi = (): ReturnMock<CallBackFunc> => {
  const promiseApi = useCallback<CallBackFunc>(async (props) => {
    return await new Promise((resolve) => {
      setTimeout(resolve, props.time, props.mockData);
    });
  }, []);
  return {
    promiseApi,
  };
};
