class Heap {
    constructor() {
        this.heap = [];
    }

    addElement(value) {
        this.heap.push(value);
        this.heapify();
    }

    heapify() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.getParent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getParent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    remove(){
        if(this.heap.length===0) return null;
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    printTree() {
        let level = 0;
        let index = 0;
        while (index < this.heap.length) {
            let elements = Math.pow(2, level);
            let row = this.heap.slice(index, index + elements).join(" ");
            console.log(row);
            index += elements;
            level++;
        }
    }
}

// Creating the heap
const heap = new Heap();
heap.addElement(15);
heap.addElement(14);
heap.addElement(13);
heap.addElement(12);
heap.addElement(1);

console.log("Peek:", heap.peek());
console.log("Heap Tree:");
heap.printTree();



