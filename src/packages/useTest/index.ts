import { type TestProps } from './type';

export const useTest = (props: TestProps): number => {
  _.forEach([10, 20, 30], (item) => {
    console.log(item);
  });
  const testFunc = (): void => {
    console.log('123');
  };
  testFunc();
  const myPromise = new Promise((resolve, reject) => {
    // 执行异步操作
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // 异步操作成功，调用 resolve 并传递结果
        resolve(randomNumber);
      } else {
        // 异步操作失败，调用 reject 并传递错误信息
        reject(new Error('操作失败'));
      }
    }, 1000);
  });

  // 使用 Promise 对象
  myPromise
    .then((result) => {
      // 处理异步操作成功的情况
      console.log('成功:', result);
    })
    .catch((error) => {
      // 处理异步操作失败的情况
      console.error('失败:', error);
    });
  // // 定义一个异步函数
  // async function fetchData() {
  //     try {
  //     // 执行异步操作
  //     const response = await fetch('https://api.example.com/data');
  //     const data = await response.json();
  //     // 处理异步操作的结果
  //     console.log(data);
  //     } catch (error) {
  //     // 处理异步操作中的错误
  //     console.error(error);
  //     }
  // }
  // // 调用异步函数
  // fetchData();
  const { inArr } = props;
  const sumNow: number = inArr.reduce((pre, cur) => pre + cur, 100);
  return sumNow;
};
