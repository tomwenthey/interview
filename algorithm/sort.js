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

// 快排 (分治)
Array.prototype.quickSort = function() {
  quick(0, this.length - 1, this);
};

function quick(left, right, arr) {
  if (arr.length > 1) {
    let index = partition(left, right, arr);
    if (left < index - 1) {
      quick(left, index - 1, arr);
    }
    if (right > index) {
      quick(index, right, arr);
    }
  }
}

function partition(left, right, arr) {
  let pivot = arr[Math.floor((left + right) / 2)];
  let i = left,
    j = right;
  while (i < j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

// 堆排序

const arr = createTestArray(100);
console.log("----------before sort----------");
console.log(arr.join());
console.log("----------after sort----------");
// arr.bubble();
arr.quickSort();
console.log(arr.join());
