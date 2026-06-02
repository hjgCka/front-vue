function Range(from, to) {
    this.from = from;
    this.to = to;
}

// 通过new Range生成的对象，会自动将Range.prototype作为Range对象的原型。
Range.prototype = {
    // 显式设置反向引用
    constructor: Range,

    includes: function(x) {
        return this.from <= x && x <= this.to;
    },

    // 这个生成器函数让这个类的实例可迭代
    [Symbol.iterator]: function*() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) 
            yield x;
    },

    // 返回范围的字符串表示
    toString: function() {
        return "(" + this.from + "..." + this.to + ")";
    }
}