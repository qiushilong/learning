/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	"use strict";

  if(!lists.length) return null;

	// 找到头
  let minIndex = 0;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      minIndex = i;
      break;
    }
  }
  if(minIndex===0&&!lists[0]) return null;

	for (let i = 1; i < lists.length; i++) {
		if (lists[i] && lists[i].val < lists[minIndex].val) {
			minIndex = i;
		}
	}
	let head = lists[minIndex];
	const _head = lists[minIndex];
	lists[minIndex] = lists[minIndex]?.next;

	// 链接
	while (true) {
		let minIndex = 0;
		for (let i = 0; i < lists.length; i++) {
			if (lists[i]) {
				minIndex = i;
				break;
			}
		}
    if(minIndex===0&&!lists[0]) break;

		let flag = true; // 所有 list 都为 null
		if (lists[minIndex] !== null) {
			flag = false;
		}
		for (let i = 0; i < lists.length; i++) {
			if (lists[i] !== null) {
				flag = false;
			}

			if (lists[i] && lists[i].val <  lists[minIndex]?.val) {
				minIndex = i;
			}
		}
		if (flag) {
			break;
		}
    if(head){
      head.next = lists[minIndex];
      head = head.next;
      lists[minIndex] = lists[minIndex]?.next;
    }

	}
	head.next = null;

	return _head;
};
// function ListNode(val, next) {
// 	this.val = val === undefined ? 0 : val;
// 	this.next = next === undefined ? null : next;
// }
// const head1 = new ListNode(7, new ListNode(8, new ListNode(9)));
// const head2 = new ListNode(4, new ListNode(7, new ListNode(11)));
// const head3 = new ListNode(1, new ListNode(20, new ListNode(21)));
// let head = mergeKLists([null,head1]);

// console.log(head===null)

// while (head) {
// 	console.log(head);
// 	head = head.next;
// }

// @lc code=end
