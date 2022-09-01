// https://leetcode.cn/problems/container-with-most-water/

var maxArea_violent = function (height) {
	let max = 0;
	for (let i = 0; i < height.length - 1; i++) {
		for (let j = i + 1; j < height.length; j++) {
			let waterNum = getWaterNum(height, i, j);
			max = waterNum > max ? waterNum : max;
		}
	}
	return max;
};

var maxArea = function (height) {
	let max = 0;
	let i = 0;
	let j = height.length - 1;
	while (i !== j) {
		let waterNum = getWaterNum(height, i, j);
		max = waterNum > max ? waterNum : max;
		height[i] >= height[j] ? j-- : i++;
	}
	return max;
};

function getWaterNum(height, i, j) {
	if (!height[i] || !height[j]) {
		return 0;
	}
	return Math.abs(i - j) * Math.min(height[i], height[j]);
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
