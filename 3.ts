/*
 * @Author: Andrew Q
 * @Date: 2022-05-04 19:11:45
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-05-04 19:45:05
 * @Description: tuple2Object
 */

// const let 是js语法 属于js世界
const tuple = ['model', 'model 3'] as const;

type R = typeof tuple

// type interface 是ts 语法 属于ts世界
type Tuple2Object<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
}


// js语法 转成 ts语法 通过 typeof 转换， 从js世界 进入 ts世界
type test = Tuple2Object<typeof tuple>







