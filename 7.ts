/*
 * @Author: Andrew Q
 * @Date: 2022-06-15 22:11:10
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-06-15 22:13:20
 * @Description: 
 */

function f(a: string, b: string): string
function f(a: number, b: number): number
function f(a: string | number, b: string | number ): string | number {
  if (typeof a === 'string') {
    return a + ':' + b;
  } else {
    return ((a as number) + (b as number));
  }
}

f(2, 3) // Ok
f(1, 'a') // Error
f('a', 2) // Error
f('a', 'b') // Ok
