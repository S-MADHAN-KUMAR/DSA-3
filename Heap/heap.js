topKFrequentElements(nums, k) {
    const freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }   

    const minHeap = new Heap();
    for (let [num, freq] of freqMap.entries()) {
        minHeap.addNewElement([num, freq]);
        if (minHeap.heap.length > k) {
            minHeap.remove();
        }
    }

    const result = [];
    while (minHeap.heap.length) {
        result.push(minHeap.remove()[0]);
    }
    return result.reverse();
}

function heapify(arr,n,i){
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }

    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest!==i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapify(arr,n,largest)
    }

}

function heapSort(arr){
    const n =arr.length;

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i);
    }

    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
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



getLeftChildIndex(index){
    return 2 * index + 1;
}

getRightChildIndex(index){
    return 2 * index + 2;
}



getLeftChild(index){
    return this.heap[this.getLeftChildIndex(index)];
}

getRightChild(index){
    return this.heap[this.getRightChildIndex(index)];
}

