import {
  type ReturnFuncDate,
  type ReturnFuncTime,
  type GetTimeReturn,
  type FuncDateProps,
} from './type';

export const useGetTime = (): GetTimeReturn => {
  const nowDate = new Date();
  // 获取当前时间和n天前的时间
  const getDatePre: ReturnFuncDate = (props: FuncDateProps): Array<number> => {
    const { preNum } = props;
    const preDate = new Date(new Date().setDate(nowDate.getDate() - preNum));
    const dataList: Array<Date> = [preDate, nowDate];
    const dataReturn: Array<number> = [];

    const getItemDate = (item: Date): string => {
      const year: string = String(item.getFullYear());
      const getMonth: number = item.getMonth() + 1;
      const month: string = String(getMonth < 10 ? `0${getMonth}` : getMonth);
      const getDay: number = item.getDate();
      const day: string = String(getDay < 10 ? `0${getDay}` : getDay);
      const dateStr: string = year + month + day;
      return dateStr;
    };

    _.forEach(dataList, (item) => {
      const dateStr: string = getItemDate(item);
      dataReturn.push(parseInt(dateStr));
    });
    return dataReturn;
  };

  const getDetailTime: ReturnFuncTime = (): string => {
    const getHours: number = nowDate.getHours();
    const hours: string = String(getHours < 10 ? `0${getHours}` : getHours);
    const getMinutes: number = nowDate.getMinutes();
    const minutes: string = String(
      getMinutes < 10 ? `0${getMinutes}` : getMinutes,
    );
    const getSeconds: number = nowDate.getSeconds();
    const seconds: string = String(
      getSeconds < 10 ? `0${getSeconds}` : getSeconds,
    );
    return `${hours}:${minutes}:${seconds}`;
  };

  return {
    getDatePre,
    getDetailTime,
  };
};
