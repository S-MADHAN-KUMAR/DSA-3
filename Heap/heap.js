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

