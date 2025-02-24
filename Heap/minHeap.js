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
    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0;
    }

    getLeftChildIndex(index){
        return 2 * index + 1;
    }

    getRightChildIndex(index){
        return 2 * index + 2;
    }

    getParentIndex(index){
        return Math.floor((index-1)/2);
    }

    getLeftChild(index){
        return this.heap[this.getLeftChildIndex(index)];
    }

    getRightChild(index){
        return this.heap[this.getRightChildIndex(index)];
    }

    remove(){
        if(this.heap.length===0) return null;
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    heapifyDown(){
        let index = 0;
        while(this.hasLeftChild(index)){
            let smallerIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
                smallerIndex = this.getRightChildIndex(index)
            }
            if(this.heap[index] < this.heap[smallerIndex]){
                break;
            }
            else{
                this.swap(index,smallerIndex);
            }
            index = smallerIndex;
        }
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
// heap.remove(1);
heap.remove();
heap.remove();

heap.printTree();



