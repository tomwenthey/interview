// 识别 https://www.baidu.com?key1=value1&key2=value2

const url = "https://www.baidu.com?key1=value1&key2=value2";
let reg = /[\w\W]+\?([\w\W]+)/;
console.log(reg.exec(url));
