/*
 * @Author: Andrew Q
 * @Date: 2022-07-04 14:03:51
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-07-04 14:03:52
 * @Description: Pick
 */
type MyPick <T, K extends keyof T> = {
  [L in K]: T[L]
}
