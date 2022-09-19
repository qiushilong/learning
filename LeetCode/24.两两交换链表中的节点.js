/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	if (!head?.next) return head;

	let p = null;
	let p1 = head;
	let p2 = head.next;
	head=p2;
	while (p2) {
		p1.next = p2.next;
		p2.next = p1;
		if (p?.next) p.next = p2;
		p = p1;
		p1 = p1.next;
		p2 = p1?.next;
	}
	return head;
};

// @lc code=end
