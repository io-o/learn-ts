/*
 * @Author: Andrew Q
 * @Date: 2022-08-30 14:31:04
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-08-30 14:31:19
 * @Description: Chainable
 */
type Chainable<T = {}> = {
  option<K extends string, P>(
    key: K extends keyof T ? (Equal<P, T[K]> extends true ? never : K) : K,
    value: P
  ): Chainable<Omit<T, K> & Record<K, P>>
  get(): T
}
