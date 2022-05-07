/*
 * @Author: Andrew Q
 * @Date: 2022-05-07 23:21:10
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-05-07 23:35:50
 * @Description: MyAwaited
 */
type A = Promise<string>

type MyAwaited<T> = T extends Promise<infer X> ? X : never

type T = MyAwaited<A>

// 处理嵌套类型
type B = Promise<Promise<string>>

type MyAwaitedX<T> = T extends Promise<infer X> ? MyAwaitedX<X> : T

type TB = MyAwaitedX<B>

// tuple类型 转 union类型

type Tuple = [string, number]

type Union = Tuple[number]
