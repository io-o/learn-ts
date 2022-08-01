/*
 * @Author: Andrew Q
 * @Date: 2022-08-01 11:19:05
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-08-01 11:19:05
 * @Description: 获取函数返回类型
 */
type MyReturnType<T extends Function> = T extends (...args: any[]) => infer K
  ? K
  : never
