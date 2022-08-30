/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start

const map = new Map();
map.set("I", 1);
map.set("V", 5);
map.set("X", 10);
map.set("L", 50);
map.set("C", 100);
map.set("D", 500);
map.set("M", 1000);

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	let sum = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i + 1] && map.get(s[i + 1]) > map.get(s[i])) {
			sum += map.get(s[i + 1]) - map.get(s[i]);
			i++;
		} else {
			sum += map.get(s[i]);
		}
	}
	return sum;
};

// @lc code=end
