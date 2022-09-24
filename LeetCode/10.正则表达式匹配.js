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
	const sArr = [...[""], ...s.split("")]; // 字符串数组
	const pArr = [...[""], ...p.split("")]; // 匹配式数组
	const rArr = []; // 结果数组，r[i][j] 表示 p 的前 j 位是否匹配 s 的前 i 位

	for (let i = 0; i < sArr.length; i++) {
		rArr.push([]);
		for (let j = 0; j < pArr.length; j++) {
			if (j === 0) {
				// 0 0 位置，空串匹配空串，返回 true
				// 0 i (i > 0) 空串不匹配 s 的前 i 位，返回 false
				rArr[i][j] = i === 0;
				continue;
			}

			// 值相等，或 pArr[j] 为 "." ，此时匹配由 rArr[j-1][i-1] 决定
			if (pArr[j] === sArr[i] || pArr[j] === ".") {
				// 第一行，只可能在 pArr[j] 为 "*" 并且 pArr[j - 2] 为 true 时才能为 真
				if (i === 0) {
					rArr[i][j] = pArr[j] === "*" && rArr[0][j - 2] === true;
					continue;
				}
				rArr[i][j] = rArr[i - 1][j - 1];
				continue;
			}

			if (pArr[j] === "*") {
				let t = j - 1;
				while (true) {
					if (pArr[t] === sArr[i] || pArr[t] === ".") {
						if (rArr[i][t] ||rArr[i-1]?.[t]||rArr[i-1]?.[t+1]) {
							rArr[i][j] = true;
							break;
						}
					}
					t--;
					if (pArr[t] === "*") {
						t--;
					} else {
						if (pArr[t] === sArr[i] || pArr[t] === ".") {
							rArr[i][j] = rArr[i-1]?.[t - 1] || (pArr[t] === "" && i === 0);
						} else {
							rArr[i][j] = false;
						}
						break;
					}
				}
				continue;
			}

			// 值不相等(pArr[j] !== "." && pArr[j] !== "*")，不匹配
			if (pArr[j] !== sArr[i]) {
				rArr[i][j] = false; 
				continue;
			}
		}
	}
	// console.log(rArr)
	return rArr[sArr.length-1][pArr.length-1];
};

// console.log(isMatch("aaaaa", "ba.*"));
// @lc code=end
