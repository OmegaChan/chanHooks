import { TestProps } from './type';

export const useTest = (props: TestProps) => {
    const { inArr } = props;
    const sumNow: number = inArr.reduce((pre, cur) => pre + cur);
    return sumNow;
};
