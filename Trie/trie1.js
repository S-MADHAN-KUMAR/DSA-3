// Autocomplete
// Count number of words in a Trie
// Longest prefix match in a Trie
// Palindrome check
// Prefix Count

// count number of occurences of a substring
// LCP between two strings
// find all occurences of a substring
// Longest repeat substring
// find all distinct substring
// check unique substring
// Delete a substing from suffix Trie
// Check if string is substring of another string
// find the shortest suffix
// check if string is Palindrome
// find kth largest substring


// longest palindromic substring
// find longest substrign with repeating characters
// find all palindromes in a string

function countWords(){

    const recursiveCountWords = (node) =>{
        let count = 0;

        if(node.isEndOfWord) count++

        for(const child in node.children){
            count += recursiveCountWords(node.children[child])
        }
        return count;
    }
    return recursiveCountWords(this.root);
}

function longestPrefix(word){
    let node = this.root;
    let longestPrefix = '';

    for(const char of word){
        if(!node.children[char]) break;
        
        node = node.children[char];
        longestPrefix += char;

        if(!node.isEndOfWord){
            longestPrefix = longestPrefix.slice(0,-1);
        }
    }
    return longestPrefix;
}


function countPrefixes(word) {
    let node = this.root;
    let count = 0;

    for (let char of word) {
        if (!node.children[char]) {
            break; // Stop if the prefix does not exist in the Trie
        }
        node = node.children[char];
        count++; // Increment for every node traversed (every prefix is valid)
    }

    return count;
}