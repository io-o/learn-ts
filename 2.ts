/*
 * @Author: Andrew Q
 * @Date: 2022-04-04 23:22:01
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-04-04 23:37:56
 * @Description: 取数组第一个元素
 */

type First<T extends any[]> = T[0];

// 判断当为空数组时 返回never
type First2<T extends any[]> = T extends [] ? never : T[0];

// 判断数组length
type First3<T extends any[]> = T['length'] extends 0 ? never : T[0];

// 通过union 判断数组第一个是否有值
// T[number] 遍历array渠道每一个值
type First4<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 通过 infer
type First5<T extends any[]> = T extends [infer U, ...any[]] ? U : never;
