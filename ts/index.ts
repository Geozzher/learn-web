// 类型声明
let a: (number | string)
a = '11'
console.log(a);

// 引用类型
let arr: any[] = []// 任意类型
arr.push('1')
arr.push(1)

// 联合类型 |
let b: (number | string)
b = 1
b = '1'
let array: (number | string)[] = []//联合类型
array.push('1')

// 枚举
enum HTTPCode {
    NotFound = 404
}
console.log(HTTPCode.NotFound);

// 元组
let t = [1, 2]
// 任意类型，相当于写js
let any: any = 1

// interface
interface Props {
    index: number,
    // ? 可选类型
    number?: number,
}

// 接口合并
interface Props {
    str: string
}

// 接口继承
interface Parent {
    name: string
}
// extends 关键字
interface Props extends Parent, Children {

}

interface Children {
    age: number
}

let obj: Props = {
    age: 1,
    name: 'ss',
    index: 1,
    str: '1'
}


// type
// 复用一些类型
type StringOrNumber = string | number
let c: StringOrNumber = '2'
c = 1
console.log(c);

function foo(num: number | string): number {
    let nums: number
    return nums
}

// 泛型 
function foo2<T>(num: T): T {
    return num
}

// type和泛型
type P1<T> = T extends string ? string : T
type P2 = P1<string>
type P3 = P1<boolean>


// Pick Omit
type index = Pick<Props, 'index'>
type name = Omit<Props, 'name'>     // 删除Props中的name属性

// as 
// let d: StringOrNumber = '1'
//     (d as string).length