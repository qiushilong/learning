/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	if (!list1) return list2;
	if (!list2) return list1;
	let head = null;
	if (list1.val <= list2.val) {
		head = list1;
		list1 = list1.next;
	} else {
		head = list2;
		list2 = list2.next;
	}
	const _head = head;

	while (list1 && list2) {
		if (list1.val <= list2.val) {
			head.next = list1;
			list1 = list1.next;
		} else {
			head.next = list2;
			list2 = list2.next;
		}
		head = head.next;
	}
	while (list1) {
		head.next = list1;
		list1 = list1.next;
		head = head.next;
	}
	while (list2) {
		head.next = list2;
		list2 = list2.next;
		head = head.next;
	}

	return _head;
};

// @lc code=end
