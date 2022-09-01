/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
	const pArr = p.split("").reduce((preValue, current, index, array) => {
		if (current === "*") return preValue;
		array[index + 1] === "*"
			? preValue.push(current + array[index + 1])
			: preValue.push(current);
		return preValue;
	}, []);

	const sArr = s.split("").reduce((preValue, current, index, array) => {
		if (current === "*") return preValue;
		array[index + 1] === "*"
			? preValue.push(current + array[index + 1])
			: preValue.push(current);
		return preValue;
	}, []);

	console.log(pArr, sArr);

	let k = "&*";

	for (let i = pArr.length - 1; i >= 0; i--) {
		console.log(pArr[i], sArr[sArr.length - 1]);
		if (pArr[i].length === 1) {
			if (sArr[sArr.length - 1] === pArr[i] || pArr[i] === ".") {
				pArr.pop();
				sArr.pop();
			} else {
				// p
				// 判断和 k 是否符合
				if (sArr[sArr.length - 1], k[0]) {
					sArr.pop();
				} else {
					return false;
				}
			}
		} else if (pArr[i].length === 2) {
			k = pArr[i];
			pArr.pop();
		}
	}
	return true;
};



console.log(isMatch("aabbaa", "a*ab.a*"));
// @lc code=end
