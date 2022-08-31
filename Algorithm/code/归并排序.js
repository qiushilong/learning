function mergeSort(arr, left, right) {
	if (right === left) {
		return [arr[left]];
	}

	let mid = left + ((right - left) >> 1);

	let leftArr = mergeSort(arr, left, mid);
	let rightArr = mergeSort(arr, mid + 1, right);

	return merge(leftArr, rightArr);
}

function merge(arr1, arr2) {
	let result = [];
	let i = 0;
	let j = 0;
	while (arr1?.[i] && arr2?.[j]) {
		arr1[i] <= arr2[j] ? result.push(arr1[i++]) : result.push(arr2[j++]);
	}
	while (arr1?.[i]) {
		result.push(arr1[i++]);
	}
	while (arr2?.[j]) {
		result.push(arr2[j++]);
	}
	return result;
}

let arr = [2, 3, 1, 4, 2, 4, 5, 7, 2, 1, 4, 7, 8, 3];

console.log(mergeSort(arr, 0, arr.length - 1));
