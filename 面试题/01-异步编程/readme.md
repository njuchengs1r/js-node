#### 问题描述
---
1. 代码的输出结果是什么？
2. 如果想要每秒输出一个结果，请问该如何改造代码？
>注意：不可修改square方法

```javascript
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
test();
```

#### 解答
1. 问题1: async定义的方法在执行的时候是按照同步的方式调用的，await关键字只会阻塞方法内部的代码向下执行，而forEach相当于连续同步调用三次箭头函数，所以1 4 9 会在1秒后同时输出，关于执行顺序可以参考下述代码
```javascript
console.log('start');
async function test() {
    console.log('async start');
    const res = Promise.resolve(5);
    console.log('async end');
}
console.log('end');
```
>输出结果
>start
>async start
>end
>async end

> 在一个事件循环中，同步代码先执行