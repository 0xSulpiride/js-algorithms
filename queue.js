import Stack from './stack';

class Queue {
	constructor(capacity) {
		this._storage = {}
		this._capacity = capacity;
		this._tail = 0;
		this._head = 0;
	}

	enqueue(value) {
		if(this.count() < this._capacity) {
			this._storage[this.tail++] = value;
			return this.count();
		}
		return 'Max capacity already reached. Remove element before adding a new one.';
	}

	dequeue() {
		let element = this._storage[this._head];
		delete this._storage[this.head];
		if(this._head < this._tail) this.head++;
		return element;
	}

	peek() {
		return this._storage[this._head];
	}

	count() {
		return this._tail - this._head;
	}

	contains(value) {
		for(let i = this._head; i < this._tail; ++i)
			if(this._storage[i] === value)
				return true;
		return false;
	}

	until(value) {
		for(let i = this._head; i < this._tail; ++i)
			if(this._storage[i] === value)
				return i-this._head+1;
		return null;
	}
}

// implementation of queue using two stacks
class _Queue_ {
	constructor(capacity) {
		this._capacity = capacity;
		this._stackIn = new Stack(capacity);
		this._stackOut = new Stack(capacity);
	}

	enqueue(value) {
		if(this.count() < this._capacity) {
			this._stackIn.push(value);
		}
		return 'Max capacity already reached. Remove element before adding a new one.';	
	}

	dequeue() {
		if(this._stackOut.count() === 0) 
			this._transferStacks()
		return this._stackOut.pop();
	}

	_transferStacks() {
		while(this._stackIn.count() > 0)
			this._stackOut.push(this._stackIn.pop());
	}

	count() {
		return this._stackOut.count() + this._stackIn.count();
	}

	peek() {
		if(this._stackOut.count() === 0) 
			this._transferStacks()
		return this._stackOut.peek();	
	}
}