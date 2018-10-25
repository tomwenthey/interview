// // 百度笔试

// function main(str, n) {
//   let type = str.split(" ");

//   let tag = [];
//   let count,
//     countArr = [];
//   for (let i = 0; i < type.length; i++) {
//     if (tag.indexOf(type[i]) === -1) {
//       count = 0;
//       tag.push(type[i]);
//       for (let j = 0; j < type.length; j++) {
//         if (type[j] === type[i]) {
//           count++;
//         }
//       }
//       countArr.push(count);
//     }
//   }
//   while (
//     countArr.length !== n ||
//     Math.floor(countArr[0] / 2) > countArr[countArr.length - 1]
//   ) {
//     let tmp = countArr.shift();
//     countArr.push(Math.floor(tmp / 2));
//     countArr.push(Math.floor(tmp / 2));
//     countArr.sort(function(a, b) {
//       return b - a;
//     });
//     countArr = countArr.slice(0, 4);
//   }
//   console.log(countArr[countArr.length - 1]);
// }

// main("1", 4);

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//   let tag = nums[0];
//   let i = 1;
//   while (i < nums.length) {
//     if (tag === nums[i]) {
//       nums.splice(i, 1);
//     } else {
//       tag = nums[i];
//       i++;
//     }
//   }
//   console.log(nums);
// };

// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// function getMaxProfit(arr) {
//   arr.sort(function(a, b) {
//     return a - b;
//   });
//   return arr[arr.length - 1] - arr[0];
// }

// console.log(getMaxProfit([10, 2, 12, 7, 8, 9]));

//let url = readline();
// function getQuery(url) {
//   let obj = {};
//   let x = url.split("?");
//   let arr = x[1].split("&");
//   let tmp;
//   for (let i = 0; i < arr.length; i++) {
//     tmp = arr[i].split("=");
//     obj[tmp[0]] = tmp[1];
//   }
//   console.log(JSON.stringify(obj));
// }
// //getQuery(url)
// getQuery("https://www.baidu.com?key1=value&key2=chine&key3=a");

// let arr = [{ a: 1, b: 1 }, { a: 6, b: 2 }, { a: 22, b: 1 }, { a: 7, b: 4 }];

// console.log(arr);
// arr.sort((be, af) => {
//   if (be.b !== af.b) {
//     return be.b - af.b;
//   } else {
//     return af.a - be.a;
//   }
// });
// console.log(arr);

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let count = 0,
    i = 0;
  let before = "";
  while (i < chars.length) {
    if (count === 0) {
      before = chars[i];
      count++;
      i++;
    } else {
      if (chars[i] === before) {
        count++;
        chars.splice(i, 1);
      } else {
        if (count !== 1) {
          let tmp = Array.from(count.toString());
          chars.splice(i, 0, ...tmp);
          i += tmp.length;
        }
        count = 0;
      }
    }
  }
  count !== 1 ? chars.splice(i, 0, ...Array.from(count.toString())) : null;
  return chars.length;
};

console.log(compress(["a"]));
