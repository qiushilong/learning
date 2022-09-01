function print(num) {
	let result = '';
	for (let i = 31; i >= 0; i--) {
		result += (num & (1 << i)) === 0 ? '0' : '1';
	}
	console.log(result);
}

print(-1);
print(3 << 1);
print(6 >> 1);
