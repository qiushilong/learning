// @flow

// 数组类型

// 方式一
const arr1: Array<number> = [1, 2, 3]

// 方式二
const arr2: number[] = [1, 2, 3]

// 
const foo: [string, number] = ['foo', 100]



// 对象类型
const obj1: { foo: String, bar: number } = { foo: 'string', bar: 100 }

// 可有可无的属性
const obj2: { foo?: string, bar: number } = { bar: 100 }

// 指定对象键值的类型
const obj3 = { [string]: string }



// 函数类型
// 返回值类型
const fn(): void{

}

// 回调函数
const fn2(callback: (string, number) => void){

}