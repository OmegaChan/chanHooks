export interface FuncDateProps {
  preNum: number;
}
export type ReturnFuncDate = (props: FuncDateProps) => Array<number>;

export type ReturnFuncTime = () => string;

export interface GetTimeReturn {
  getDatePre: ReturnFuncDate;
  getDetailTime: ReturnFuncTime;
}
