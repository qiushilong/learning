class Queue {
	constructor() {
		this.items = [];
	}
	push(item) {
		this.items.push(item);
	}
	pop() {
		return this.items.shift();
	}
	isEmpty() {
		return this.items.length === 0;
	}
	size() {
		return this.items.length;
	}
}

class Stack {
	constructor() {
		this.queue1 = new Queue();
		this.queue2 = new Queue();
	}

	push(item) {
		if (this.queue2.size()) {
			this.queue2.push(item);
		} else {
			this.queue1.push(item);
		}
	}

	pop() {
		let result = null;
		if (this.queue1.size()) {
			while (this.queue1.size() !== 1) {
				this.queue2.push(this.queue1.pop());
			}
			result = this.queue1.pop();
		} else if (this.queue2.size()) {
			while (this.queue2.size() !== 1) {
				this.queue1.push(this.queue2.pop());
			}
			result = this.queue2.pop();
		}
		return result;
	}

	size() {
		return this.queue1.size() || this.queue2.size();
	}
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

while (stack.size()) {
	console.log(stack.pop());
}
