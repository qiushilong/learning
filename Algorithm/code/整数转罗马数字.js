// https://leetcode.cn/problems/integer-to-roman/
// 贪心
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	const result = [];
	const arr = [
		[1000, 'M'],
		[900, 'CM'],
		[500, 'D'],
		[400, 'CD'],
		[100, 'C'],
		[90, 'XC'],
		[50, 'L'],
		[40, 'XL'],
		[10, 'X'],
		[9, 'IX'],
		[5, 'V'],
		[4, 'IV'],
		[1, 'I'],
	];
	arr.forEach((item) => {
		let count = Math.floor(num / item[0]);
		for (let i = 0; i < count; i++) {
			result.push(item[1]);
		}
		num = num % item[0];
	});
	return result.join('');
};

console.log(intToRoman(1994));
