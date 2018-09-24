function createTestArray(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(getRandomInt(size));
  }
  return arr;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

// 冒泡
Array.prototype.bubble = function() {
  for (let i = this.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (this[j] > this[j + 1]) {
        swap(this, j, j + 1);
      }
    }
  }
};

// 插入

// 选择

// 归并

// 快排

// 堆排序

const arr = createTestArray(100);
console.log(arr.join());
// arr.bubble();
console.log(arr.join());
