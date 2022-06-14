/*
 * @Author: Andrew Q
 * @Date: 2022-06-14 23:13:29
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-06-14 23:16:25
 * @Description: makeCustomer
 */
type User = {
  id: number
  kind: string
}

function makeCustomerQ<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    id: u.id,
    kind: 'customer',
  }
}

function makeCustomerA<T extends User>(u: T): T {
  return {
    ...u,
    id: u.id,
    kind: 'customer',
  }
}


