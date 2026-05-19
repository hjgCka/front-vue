let a: string
a = 'hello'
console.log(a)

function count(x:number, y:number): number {
    return x+y+1
}

let result = count(1, 2)
console.log(result)

//类型推断
let d = 99

// 对象类型应该是属性为number，同时值也为number
// 数组对象带有下标0，1，2，相当于key了。而1，2，3就是值。
type MyArr = {
  [n: number]: number;
};

const arr: MyArr = [1, 2, 3];
console.log(arr)

