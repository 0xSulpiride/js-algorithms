class Stack {
  constructor(capacity) {
    this._storage = {}
    this._capacity = capacity || Infinity
    this._count = 0
  }

  push(value) {
    if(this._count < this._capacity) {
      this._storage[this._count++] = value
      return this._count
    }
    return 'Max capacity already reached. Remove element before adding a new one.'
  }

  pop() {
    if(this.count == 0)
      return 'No element inside the stack. Add element before poping.'
    var value = this._storage[--this.count]
    delete this._storage[this._count]
    return value;
  }

  peek() {
    return this._storage[this._count - 1]
  }

  count() {
    return this._count;
  }

  until(value) {
    return Object.values(this._storage).reverse().indexOf(value)
  }
}