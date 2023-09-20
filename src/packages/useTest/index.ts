import { TestProps } from './type';

export const useTest = (props: TestProps) => {
    _.forEach([10, 20, 30], item => console.log(item));
    const { inArr } = props;
    const sumNow: number = inArr.reduce((pre, cur) => pre + cur, 100);
    return sumNow;
};
