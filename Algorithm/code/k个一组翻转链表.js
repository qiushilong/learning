// https://leetcode.cn/problems/reverse-nodes-in-k-group/

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function (head, k) {
	let node = head;
	let _head = head;
	let afterNode = null;
	let before = null;
	while (nextK(node, k - 1)) {
		// 翻转 node,k 内的内容
		// node 指向翻转后的 第一个元素
		afterNode = nextK(node, k);

		node = reverseInK(afterNode, node, k);

		if (before) {
			before.next = node;
		} else {
			_head = node;
		}

		before = nextK(node, k - 1);
		node = afterNode;
	}
	return _head || null;
};

// 取包括 node 的后 k 位
function nextK(node, k) {
	let _node = node;
	for (let i = 1; i <= k; i++) {
		if (!_node) {
			return null;
		} else {
			_node = _node.next;
		}
		if (i === k) {
			return _node;
		}
	}
}

// 前提保证 node 后面 k 位有值
function reverseInK(afterNode, node, k) {
	if (!nextK(node, k - 1)) {
		return null;
	}
	let _node = node;
	let before = afterNode;
	let after = _node.next;
	for (let i = 1; _node && i <= k; i++) {
		_node.next = before;
		before = _node;
		if (i !== k) {
			_node = after;
		}
		if (_node.next) {
			after = _node.next;
		}
	}
	return _node;
}

let list = new ListNode(1, null);
list.next = new ListNode(2, null);
list.next.next = new ListNode(3, null);
list.next.next.next = new ListNode(4, null);
list.next.next.next.next = new ListNode(5, null);
list.next.next.next.next.next = new ListNode(6, null);
list.next.next.next.next.next.next = new ListNode(7, null);
list.next.next.next.next.next.next.next = new ListNode(8, null);

// list.next.next = reverseInK(null, list.next.next, 2);
list = reverseKGroup(list, 0);

while (list) {
	console.log(list);
	list = list.next;
}
