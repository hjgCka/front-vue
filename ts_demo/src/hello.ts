const hello : string = "Hello World!"
console.log(hello)

const apple = 'Apple'
console.log(apple.toUpperCase())

// 先定义类型，在去用它。那么返回值为void的话，其实不会管返回的是什么。
// 但是不能拿着返回值去做判断。
type logFunc = () => void
const f1:logFunc = function() {
    return 66
}
console.log(f1())