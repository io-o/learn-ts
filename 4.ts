/*
 * @Author: Andrew Q
 * @Date: 2022-05-07 22:58:00
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-05-07 23:18:27
 * @Description: exclude
 */
interface Person {
  name: string
  age: number
  size?: number
}

interface Tony {
  name: string
}

// 可选项 Partial
type T = Partial<Person>

// 必选项 Required
type R = Required<Person>

// 选择属性 Pick
type P = Pick<Person, 'size' | 'name'>

// 去除属性 Omit
type O = Omit<Person, 'size' | 'name'>

// Exclude 排除 Union类型
type GExclude<T, U> = T extends U ? never : T

type E = Exclude<1 | 2 | 3, 1>
