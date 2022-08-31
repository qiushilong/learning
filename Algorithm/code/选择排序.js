function sort(arr) {
	if (!Array.isArray(arr) || arr.length < 2) {
		return arr;
	}
	for (let i = 0; i < arr.length; i++) {
		let min_index = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min_index]) {
				min_index = j;
			}
		}
		swap(arr, i, min_index);
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
