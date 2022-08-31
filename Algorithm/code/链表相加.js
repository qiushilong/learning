function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

function getListSum(head1, head2) {
	const arr1 = [];
	const arr2 = [];
	while (head1) {
		arr1.unshift(head1.val);
		head1 = head1.next;
	}
	while (head2) {
		arr2.unshift(head2.val);
		head2 = head2.next;
	}
	const num1 = +arr1.join('');
	const num2 = +arr2.join('');
	return num1 + num2;
}

let list = new ListNode(6, null);
list.next = new ListNode(7, null);
list.next.next = new ListNode(8, null);

let list2 = new ListNode(1, null);
list2.next = new ListNode(2, null);
list2.next.next = new ListNode(3, null);

console.log(getListSum(list, list2)); // 876 + 321
