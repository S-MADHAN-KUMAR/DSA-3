class Heap{
    constructor(){
        this.heap = [];
    }

    swap(index1,index2){
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp
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

    getParent(index){
        return this.heap[this.getParentIndex(index)];
    }

    peek(){
        if(this.heap.length===0) return null;
        return this.heap[0];
    }

    heapifyUp(){
        let index = this.heap.length-1;
        while(this.hasParent(index)&&this.getParent(index)<this.heap[index]){
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
            let largeChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index)&&this.getRightChild(index)>this.getLeftChild(index)){
                largeChildIndex = this.getRightChildIndex(index);
            }
            if(this.heap[index]>this.heap[largeChildIndex]){
                break;
            }
            else{
                this.swap(index,largeChildIndex);
            }
            index = largeChildIndex;
        }
    }

    heapSort(array){

        const maxHeap = new Heap();

        array.forEach(value => {
            maxHeap.addNewElement(value);
        });

        const sortedArray = [];
        while(maxHeap.heap.length){
            sortedArray.push(maxHeap.remove());
        }
        return sortedArray.reverse();
    }
    
    
    findKthSmallest(nums,k){

        const maxHeap = new Heap();
        for(let num of nums){
            maxHeap.addNewElement(num);
            if(maxHeap.heap.length>k){
                maxHeap.remove();
            }
        }
        return maxHeap.peek();
}

}