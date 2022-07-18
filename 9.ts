/*
 * @Author: Andrew Q
 * @Date: 2022-07-18 15:44:32
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-07-18 15:44:32
 * @Description: MyAwaited
 */
type MyAwaited<T extends Promise<any>> = T extends Promise<infer A>
  ? A extends Promise<any>
    ? MyAwaited<A>
    : A
  : T
  