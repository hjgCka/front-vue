
/**
 * 范型函数。
 * 泛型接口。
 * 泛型约束。
 * 泛型类。
 */

function logData<T, U>(data1: T, data2: U) {
    Date.now()%2? console.log(data1) : console.log(data2)
}
logData<string, boolean>('hello', true)
logData<string, number>('hello', 555)

function f2<T, U>(data1: T, data2: U): T|U {
    return Date.now() % 2 ? data1 : data2;
}
console.log(f2<string, number>('abc', 666))

interface PersonInterface<T> {
    name: string,
    age: number,
    extraInfo: T
}
let p: PersonInterface<number> = {
    name: 'Tom',
    age: 20,
    extraInfo: 250
}

type JobInfo = {
    title: string,
    company: string
}
let p1: PersonInterface<JobInfo> = {
    name: 'Jack',
    age: 20,
    extraInfo: {
        title: 'abc',
        company: 'aa'
    }
}


interface StuInterface {
    name: string,
    age: number
}
function logStu<T extends StuInterface>(info: T): void {
    console.log(`我叫${info.name}，我今年${info.age}岁了`)
}
logStu({name:'Tom', age: 20})



class Person<T> {
    constructor(
        public name: string,
        public age: number,
        public extraInfo: T
    ){}
    speak() {
        console.log(`我叫${this.name}，我今年${this.age}岁了`)
        console.log(this.extraInfo)
    }
}
const c = new Person<number>('tom', 20, 250)
const c2 = new Person<JobInfo>('jack', 30, {title:'22', company:'aaa'})


