/*
 * @Author: Andrew Q
 * @Date: 2022-08-15 10:14:13
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-08-15 10:14:14
 * @Description: Last
 */

type Last<T extends any[]> = T extends [...any, infer L]
  ? L
  : never
