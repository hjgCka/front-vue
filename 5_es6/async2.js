
let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
p.then(x => console.log(x));

//上面语句的替代
async function foo() {
    let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
    console.log(await p)
}

foo()