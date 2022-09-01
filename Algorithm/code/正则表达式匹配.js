// https://leetcode.cn/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
	// .* 前面是什么都可以去掉
	// M* 前面必须和 M* 前面一样才可以去掉
	// 只身下 M* 时表示匹配

	const location = [];
	console.log(p);
	for (let i = 0; i < p.length; i++) {
		if (p[i] === '*') {
			location.push(i);
		}
	}
	console.log('location', location);

	// 没有 * 号，按位比较
	if (!location.length) {
		strEqual(s, p);
		return true;
	}

	for (let i = location.length - 1; i >= 0; i--) {
		const pStr = p.slice(location[i] + 1, p.length);
		const sStr = s.slice(s.length - pStr.length, s.length);
		console.log(pStr, sStr);
		if (!strEqual(sStr, pStr)) {
			return false;
		}
		p = p.slice(0, p.length - pStr.length);
		s = s.slice(0, s.length - sStr.length);

		const pNode = p[p.length - 2];
		let j = s.length - 1;
		for (; j >= 0; j--) {
			if (s[j] !== pNode) {
				break;
			}
		}
		p = p.slice(0, p.length - 2);
		s = s.slice(0, j);
		console.log(p, s);
	}
};

const strEqual = (s, p) => {
	for (let i = 0; i < s.length; i++) {
		if (s[i] !== p[i] && p[i] === '.') {
			return false;
		}
	}
	return true;
};

isMatch('axxxxas', 'ax*as');
