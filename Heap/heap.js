function topKFrequentElements(nums, k) {
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

function findKthLargest(nums, k) {
    const minHeap = new Heap();
    for (let num of nums) {
        minHeap.addNewElement(num);
        if (minHeap.heap.length > k) {
            minHeap.remove();
        }
    }
    return minHeap.peek();
}

function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than the current largest
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root, swap and continue heapifying
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    const n = arr.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Swap root (largest) with last element
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on reduced heap
        heapify(arr, i, 0);
    }
}

// Example Usage
const arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);
console.log("Sorted array:", arr);

