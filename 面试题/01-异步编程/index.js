const list = [1, 2, 3];
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num);
        }, 1000);
    })
}

function test() {
    list.forEach(async x => {
        const res = await square(x);
        console.log(res);
    })
}
// test();

// 方法1: await放在内部

async function test1() {
    for (let i = 0; i < list.length; i++) {
        const res = await square(list[i]);
        console.log(res);
        // let const 在es6 中有局部作用域的概念
    }
}

// test1();

// 方法2: 使用Promise.then依次调用
function test2() {
    let i = 0;
    square(list[i++])
        .then(res => {
            console.log(res);
            return square(list[i++])
        })
        .then(res => {
            console.log(res);
            return square(list[i++])
        })
        .then(res => {
            console.log(res);
        })
}

// test2();

// 方法3: 对方法2改造成递归形式

function test3(index) {
    if (index >= list.length) {
        return;
    }
    square(list[index])
        .then(res => {
            console.log(res);
            test3(index + 1);
        })
}

// test3(0);

// 方法3: 利用await的阻塞和promise的状态改变机制触发then方法执行

let p = Promise.resolve();

function test4(index) {
    if (index >= list.length) {
        return;
    }

    p = p.then(async () => {
        const res = await square(list[index]);
        console.log(res);
        test4(index + 1);
    })
}

test4(0);


// await 阻塞内部代码执行
// console.log('start');
// async function test() {
//     console.log('async start');
//     const res = await Promise.resolve(5);
//     console.log('async end');
// }
// test();
// console.log('end');