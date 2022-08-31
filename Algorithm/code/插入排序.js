function sort(arr) {
	if (!Array.isArray(arr) || arr.length < 2) {
		return arr;
	}

	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j >= 1; j--) {
			if (arr[j] < arr[j - 1]) {
				swap(arr, j, j - 1);
			} else {
				break;
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
