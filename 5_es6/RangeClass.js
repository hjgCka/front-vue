class Range {
    constructor (from, to) {
        this.from = from;
        this.to = to;
    }

    has(x) {
        return typeof x === "number" && this.from <= x && x <= this.to;
    }

    toString() {
        return `{x | ${this.from} <= x <= ${this.to} }`;
    }

    [Symbol.iterator]() {
        let next = Math.ceil(this.from);
        let last = this.to;
        return {
            next() {
                return (next <= last)? {value: next++} : {done: true};
            },

            //为了方便起见，让迭代器本身也可迭代
            [Symbol.iterator]() {
                return this;
            }
        }
    }
}