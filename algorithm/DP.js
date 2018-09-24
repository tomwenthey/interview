// 338. Counting Bits

// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let pow = 1;
  let dp = [];
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= num; i++) {
    if (i === pow * 2) {
      pow = pow * 2;
      dp[i] = 1;
    } else {
      dp[i] = 1 + dp[i - pow];
    }
  }
  return dp[num];
};

// 392. Is Subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] !== t[j]) {
      j++;
    } else {
      i++;
      j++;
    }
  }
  if (i === s.length) {
    return true;
  } else {
    return false;
  }
};
