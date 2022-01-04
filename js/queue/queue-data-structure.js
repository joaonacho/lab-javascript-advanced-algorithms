class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (!this.queueControl.length) {
      return true;
    } else if (this.queueControl.length === this.MAX_SIZE) {
      return false;
    }
  }

  isEmpty() {
    return !this.queueControl.length ? true : false;
  }

  enqueue(item) {
    // ... your code goes here
  }

  dequeue() {
    // ... your code goes here
  }

  display() {
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
