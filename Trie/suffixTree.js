class SuffixTrieNode {
    constructor() {
        this.children = {};
        this.isEndOfSuffix = false;
    }
}

class SuffixTrie {
    constructor(word) {
        this.root = new SuffixTrieNode();
        this.buildSuffixTrie(word);
    }

    // Insert all suffixes in a compressed form
    buildSuffixTrie(word) {
        for (let i = 0; i < word.length; i++) {
            this.insertSuffix(word.slice(i));
        }
    }

    insertSuffix(suffix) {
        let node = this.root;
        for (const char of suffix) {
            if (!node.children[char]) {
                node.children[char] = new SuffixTrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfSuffix = true;
    }

    search(substring) {
        let node = this.root;
        for (const char of substring) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}

// Usage
const suffixTrie = new SuffixTrie("banana");
console.log(suffixTrie.search("ana"));  // true
console.log(suffixTrie.search("ban"));  // true
console.log(suffixTrie.search("apple")); // false