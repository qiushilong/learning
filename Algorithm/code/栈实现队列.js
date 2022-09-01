class Stack {
	constructor() {
		this.items = [];
	}
	push(item) {
		this.items.push(item);
	}
	pop() {
		return this.items.pop();
	}
	peek() {
		return this.items[this.items.length - 1];
	}
	clear() {
		this.items = [];
	}
	isEmpty() {
		return this.items.length === 0;
	}
	size() {
		return this.items.length;
	}
}

class Queue {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
	}
	push(item) {
		this.stack1.push(item);
	}
	pop() {
		while (!this.stack1.isEmpty()) {
			this.stack2.push(this.stack1.pop());
		}
		let result = this.stack2.pop();
		while (!this.stack2.isEmpty()) {
			this.stack1.push(this.stack2.pop());
		}
		return result;
	}
	size() {
		return this.stack1.size();
	}
}

let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);

while (queue.size()) {
	console.log(queue.pop());
}
