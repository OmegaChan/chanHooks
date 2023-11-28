export interface MockApiProps<T> {
  mockData: T;
  time: number;
}

export interface ReturnMock<U> {
  promiseApi: U;
}
