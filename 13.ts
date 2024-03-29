/*
 * @Author: Andrew Q
 * @Date: 2022-08-12 16:59:13
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-08-15 10:01:00
 * @Description: TupleToUnion
 */
type TupleToUnion<T> = T extends [infer A, ...infer B]
  ? A | TupleToUnion<B>
  : never
  