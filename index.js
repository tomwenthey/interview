// 百度笔试

function main(str, n) {
  let type = str.split(" ");

  let tag = [];
  let count,
    countArr = [];
  for (let i = 0; i < type.length; i++) {
    if (tag.indexOf(type[i]) === -1) {
      count = 0;
      tag.push(type[i]);
      for (let j = 0; j < type.length; j++) {
        if (type[j] === type[i]) {
          count++;
        }
      }
      countArr.push(count);
    }
  }
  while (
    countArr.length !== n ||
    Math.floor(countArr[0] / 2) > countArr[countArr.length - 1]
  ) {
    let tmp = countArr.shift();
    countArr.push(Math.floor(tmp / 2));
    countArr.push(Math.floor(tmp / 2));
    countArr.sort(function(a, b) {
      return b - a;
    });
    countArr = countArr.slice(0, 4);
  }
  console.log(countArr[countArr.length - 1]);
}

main("1", 4);
