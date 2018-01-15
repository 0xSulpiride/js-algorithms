class Stack { 
  constructor(max_rooms) {
    this.storage = '';
    this.max_rooms = max_rooms;
    this.size = 0;
  }
  
  // add value to collection
  push(value) { // 
    if(this.size >= this.max_rooms) {
      this.pop();
    }
    this.storage = this.storage.concat('***', value);
    this.size = this.size + 1;
  }
  
  // => most recent element added collection
  // removes item 
  pop() { 
    var str = this.storage.slice(this.storage.lastIndexOf('***') + 3);
    this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'));
    this.size = this.size - 1;
    return str;
  }
  
  // => most recent element added collection. 
  // similar to pop, but doesnt remove element from collection
  peek() { 
    return this.storage.slice(this.storage.lastIndexOf('***') + 3);
  }
  
  // => number of elements in collection
  size() { 
    return this.size;
  }
  
  // => number of pops until you get to a certain value:
  until(value) { 
    return this.storage.split('***').indexOf(value);
  }
}
