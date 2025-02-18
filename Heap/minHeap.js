class Heap{
    constructor(){
        this.heap = [];
    }

    swap(index1,index2){
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index){
        return this.getParentIndex(index) >=0;
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

    getParent(index){
        return this.heap[this.getParentIndex(index)];
    }

    peek(){
        if(this.heap.length===0) return null;
        return this.heap[0];
    }

    heapifyUp(){
        let index = this.heap.length-1;
        while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
            this.swap(this.getParentIndex(index),index);
            index = this.getParentIndex(index);
        }
    }

    addNewElement(value){
        this.heap.push(value);
        this.heapifyUp();
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

    findKthLargest(nums, k) {
        const minHeap = new Heap();
        for (let num of nums) {
            minHeap.addNewElement(num);
            if (minHeap.heap.length > k) {
                minHeap.remove();
            }
        }
        return minHeap.peek();
    }

}

const heap = new Heap();

heap.addNewElement(1);
heap.addNewElement(12);
heap.addNewElement(13);
heap.addNewElement(14);
heap.addNewElement(15);
console.log(heap.peek())
console.log(heap.findKthLargest([1,2,3,4,5],3));
