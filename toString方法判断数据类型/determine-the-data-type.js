// 使用 Object.prototype.toString方法来判断数据的类型
// Object.prototype.toString返回值 [object 构造函数名]
// 所以可以用来进行判断数据的具体类型
// 复习链接 https://wangdoc.com/javascript/stdlib/object.html#tostring-%E7%9A%84%E5%BA%94%E7%94%A8%E5%88%A4%E6%96%AD%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B

function getType(data) {
    return Object.prototype.toString.call(data);
}
// 对返回的字符串做进一步处理

function getType_2(data) {
    const temp = Object.prototype.toString.call(data);
    return temp.match(/\[object (.*?)\]/)[1].toLowerCase();
}