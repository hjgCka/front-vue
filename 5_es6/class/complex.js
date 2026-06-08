class Complex {
    // 使用私有字段保存实数 和 虚数
    #r = 0;
    #i = 0;

    // 静态字段
    static ZERO = new Complex(0, 0);

    constructor(real, imaginary) {
        this.r = real;
        this.i = imaginary;
    }

    plus(that) {
        return new Complex(this.r + that.r, this.i + that.i);
    }
    times(that) {
        return new Complex(this.r * that.r - this.i * that.i,
             this.r * that.i + this.i * that.r);
    }

    // 静态方法
    static sum(c, d) {
        return c.plus(d);
    }
    static product(c, d) {
        return c.times(d);
    }

    // 实例方法，但是是使用获取函数定义的
    get real() {
        return this.r;
    }
    get imaginary() {
        return this.i;
    }
    get magnitude() {
        return Math.hypot(this.r, this.i);
    }
    toString() {
        return `{${this.r},${this.i}}`;
    }
    equals(that) {
        return that instanceof Complex &&
            this.r === that.r && this.i === that.i;
    }
}