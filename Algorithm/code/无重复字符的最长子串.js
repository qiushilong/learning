// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
	if (!s || !s.length) {
		return 0;
	}

	let left = 0;
	let right = 1;
	let max = 1;

	for (; right <= s.length; right++) {
		let str = s.slice(left, right);
		if (right === s.length || str.includes(s[right])) {
			max = str.length > max ? str.length : max;
			left = left + str.indexOf(s[right]) + 1;
		}
	}

	return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
