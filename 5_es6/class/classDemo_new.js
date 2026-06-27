class Range {
    constructor(from, to, length) {
        this.from = from;
        this.to = to;
        this.length = length;
    }

    includes(x) {
        return this.from <= x && x <= this.to;
    }

    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) 
            yield x;
    }

    toString() {
        return `(${this.from}...${this.to} length=${this.length})`;
    }
}

Object.defineProperty(Range.prototype, 'length', {
    get() {
        // 可以固定为150查看效果
        return this._length;
    },
    set(val) {
        console.log('set方法被调用', val)
        this._length = val
    }
})

/**
 * new操作符产生的对象，本身是没有任何属性的。
 * 执行this.from = x 或者任何this.p = v时，都是属于赋值操作。
 * 这时由于本身对象上没有属性，才会从原型链上进行查找，如果原型链定义的是get/set访问器，就会执行方法，而不会为对象设置属性。
 * 如果找到普通可读写属性，那么就会为对象添加属性并赋值。
 */
let r = new Range(1, 3, 20);
// console.log(r.includes(2));
// console.log(r.toString());
// console.log([...r])
console.log(r);
console.log(r.toString());