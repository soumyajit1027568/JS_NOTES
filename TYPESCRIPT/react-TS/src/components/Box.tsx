import React, { type ReactNode } from 'react'
interface props {
    title: string,
    count: number,
    fun(a:string|number): void,
    children?:ReactNode
}
function Box({title,count,fun,children}:props) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{count}</h2>
      <button onClick={()=>fun("Hello")}>Click me</button>
      {children}
    </div>
  )
}
//using generics
// interface BoxProps<T> {
//   title: string,
//   count: number,
//   fun(a: T): void,
//   children?: ReactNode
// }

// function Box<T>({ title, count, fun, children }: BoxProps<T>) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>{count}</h2>
//       <button onClick={() => fun("Hello" as T)}>Click me</button>
//       {children}
//     </div>
//   )
// }

export default Box