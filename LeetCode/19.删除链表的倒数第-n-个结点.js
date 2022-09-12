/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let temp = [];
	while (head) {
		temp.push(head);
		head = head.next;
	}
	const index = temp.length - n;
	if (index === 0) return temp[1] || null;
	temp[index - 1].next = temp[index + 1] || null;
	return temp[0];
};
// @lc code=end
