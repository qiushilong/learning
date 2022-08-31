function getIndex(arr, num) {
	if (!Array.isArray(arr) || !arr.length) {
		return -1;
	}
	let l = 0;
	let r = arr.length - 1;
	let m = 0;

	while (l <= r) {
		// m = Math.floor((l + r) / 2);
		m = l + ((r - l) >> 2);
		if (arr[m] === num) {
			return m;
		}
		if (arr[m] > num) {
			r = m - 1;
		} else {
			l = m + 1;
		}
	}
	return -1;
}

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getIndex(arr, 5));

/**
 * l+r是可能溢出的
 * l+(r-l)/2是不会溢出的
 */
