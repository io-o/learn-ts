/*
 * @Author: Andrew Q
 * @Date: 2022-08-08 15:34:11
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-08-08 15:34:12
 * @Description: MyReadOnly
 */
type MyReadOnly<T, K extends keyof T = keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
} & {
  readonly[L in K]: T[L]
}

// Example
interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadOnly<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
}

