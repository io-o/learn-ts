/*
 * @Author: Andrew Q
 * @Date: 2022-04-04 23:22:01
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-04-04 23:24:26
 * @Description: 取数组第一个元素
 */

type First<T extends any[]> = T[0];

// 判断当为空数组时 返回never
type First2<T extends any[]> = T extends [] ? never : T[0];
