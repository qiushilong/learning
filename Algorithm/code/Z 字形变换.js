// https://leetcode.cn/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	// 第一层隔：(numRows - 1) * 2 -1
	// 最后一层隔：(numRows - 1) * 2 -1
	// 第二层：(numRows -2) * 2 -1  |  (2 - 1 ) * 2 - 1
	// 第三层：(numRows -3) * 2 - 1 |  (3 - 1 ) * 2 - 1
	// 第n层：(numRows -n) * 2 - 1 |  (n - 1 ) * 2 - 1

	if (s.length <= 1 || numRows === 1) {
		return s;
	}

	let arr = [];

	for (let i = 1; i <= numRows; i++) {
		if (i === 1 || i === numRows) {
			for (let j = i - 1; j < s.length; j += (numRows - 1) * 2) {
				arr.push(s[j]);
			}
		} else {
			let num = 0;

			for (let j = i - 1; j < s.length; ) {
				arr.push(s[j]);
				if (num % 2 === 0) {
					j += (numRows - i) * 2;
				} else {
					j += (i - 1) * 2;
				}
				num++;
			}
		}
	}
	return arr.join('');
};

console.log(convert('AB', 1));
