class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }

  insertFirst(data) {
    let newNode = new Node(data, null);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertLast() {
    let newNode = new Node(data, null);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      retrun;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  insertAt() {
    let newNode = new Node(data, null);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    } else if (idx == 1) {
      this.insertFirst(data);
      return;
    }

    let cur = this.head;
    let count = 1;

    while (cur != null) {
      if (count + 1 == idx) break;
      cur = cur.next;
      count++;
    }

    newNode.next = cur.next;
    cur.next = newNode;
    this.size++;
  }

  print() {
    let cur = this.head;
    console.log(`크기 : ${this.getSize()}`);

    while (cur != null) {
      cur = cur.next;
      console.log(cur.data);
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertFirst("월요일");
linkedList.print();
