/*
 * @Author: Andrew Q
 * @Date: 2022-04-04 23:17:18
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-04-04 23:19:56
 * @Description: enum转数组
 */

const tuple = ['get', 'post', 'put'] as const;

type Tuple<T extends readonly any[]> = {
  [P in T[number]]: P;
};

type Test = Tuple<typeof tuple>;
