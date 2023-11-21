/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(this.head === null) {
      this.head = newNode;
    }
    else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(this.head === null) {
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length-1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length || idx < 0) {
      return "Not valid index"
    }
    let current = this.head;
    for(let i=0; i<idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0) {
      return "Not valid index"
    }
    let current = this.head;
    for(let i=0; i<idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx >= this.length || idx < 0) {
      return "Not valid index"
    }
    let current = this.head;
    let newNode = new Node(val);
    for(let i=0; i<idx; i++) {
      current = current.next;
    }
    let nextNode = current.next;
    current.next = newNode;
    newNode.next = nextNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx >= this.length || idx < 0) {
      return "Not valid index"
    }

    if(this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    let previousNode = this.head;
    let currentNode = previousNode.next;

    for(let i=0; i<idx; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let sum = 0;
    if(this.length === 0) {
      return 0;
    }
    for(let i=0; i<this.length; i++) {
      sum += current.val;
      current = current.next;
    }
    return sum/this.length;
  }
}

module.exports = LinkedList;
