/*
 * @Author: Andrew Q
 * @Date: 2022-07-19 10:27:51
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-07-19 10:27:52
 * @Description: Concat
 */
type Concat<T extends any[], U extends any[]> = [...T, ...U] 
