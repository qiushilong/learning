// https://leetcode.cn/problems/add-two-numbers/

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
	let head = new ListNode(null, null);
	let _head = head;
	let overNum = 0;
	while (l1 && l2) {
		let sum = l1.val + l2.val + overNum;
		let val = sum % 10;
		overNum = Math.floor(sum / 10);

		let listNode = new ListNode(val, null);
		_head.next = listNode;
		_head = _head.next;

		l1 = l1.next;
		l2 = l2.next;
	}
	while (l1) {
		let sum = l1.val + overNum;
		let val = sum % 10;
		overNum = Math.floor(sum / 10);
		let listNode = new ListNode(val, null);
		_head.next = listNode;
		_head = _head.next;
		l1 = l1.next;
	}
	while (l2) {
		let sum = l2.val + overNum;
		let val = sum % 10;
		overNum = Math.floor(sum / 10);
		let listNode = new ListNode(val, null);
		_head.next = listNode;
		_head = _head.next;
		l2 = l2.next;
	}
	if (overNum) {
		let listNode = new ListNode(overNum, null);
		_head.next = listNode;
	}
	return head.next;
};
const l1 = new ListNode(9, new ListNode(9, new ListNode(9, null)));
const l2 = new ListNode(
	9,
	new ListNode(9, new ListNode(9, new ListNode(9, null)))
);

let result = addTwoNumbers(l1, l2);

while (result) {
	console.log(result);
	result = result.next;
}
