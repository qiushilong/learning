function sort(arr) {
	if (!Array.isArray(arr) || arr.length < 2) {
		return arr;
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		for (let j = 1; j <= i; j++) {
			if (arr[j - 1] > arr[j]) {
				swap(arr, j - 1, j);
			}
		}
	}
	return arr;
}

function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

const arr = [3, 2, 4, 5, 6, 8, 9, 7, 1];
console.log(sort(arr));
