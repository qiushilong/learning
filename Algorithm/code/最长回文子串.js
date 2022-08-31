// https://leetcode.cn/problems/longest-palindromic-substring/

// 暴力破解
var longestPalindrome_violence = function (s) {
	if (s.length <= 1) {
		return s;
	}
	let max = s[0];
	for (let i = 0; i + max.length < s.length; i++) {
		for (let j = i + max.length; j < s.length; j++) {
			let str = s.slice(i, j + 1);
			if (isPalindrome(str) && str.length > max.length) {
				max = str;
			}
		}
	}
	return max;
};

// function isPalindrome(s) {
// 	while (s.length > 1) {
// 		if (s[0] === s[s.length - 1]) {
// 			s = s.slice(1, s.length - 1);
// 		} else {
// 			return false;
// 		}
// 	}
// 	return true;
// }

var isPalindrome = function (x) {
	return x == ('' + x).split('').reverse().join('');
};

console.log(longestPalindrome_violence('adxda'));
