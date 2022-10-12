/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // nums 数组合并
  const sum=nums.reduce((pre,item)=>pre+item,'')

  let flag = sum.some((item,index,array)=>array[index-1]&&item>array[index-1]);

  if(flag){
    // 最大情况，返回最小值
    // 最小值排序，

  }


  console.log(sum)
};

nextPermutation([9,8,4,10])
// @lc code=end

