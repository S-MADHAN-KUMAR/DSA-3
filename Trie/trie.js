class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let node = this.root;
        for(const char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word){
        let node = this.root;
        for(const char of word){
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    delete(word){

        const deleteRecursive = (node,word,index)=>{
            if(index === word.length){
                if(!node.isEndOfWord) return false;
                node.isEndOfWord = false;
                return Object.keys(node.children).length === 0;
            }

            const char = word[index];
            const childNode = node.children[char];
            if(!childNode) return false;

            const shouldDeleteChild = deleteRecursive(childNode,word,index+1);

            if(shouldDeleteChild){
                delete node.children[char];
                return Object.keys(node.children).length===0 && !node.isEndOfWord;
            }

            return false;
        }

        deleteRecursive(this.root,word,0);
    }

    startsWith(prefix){
        let node = this.root;
        for(const char of prefix){
            if(!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }    


    autocomplete (word){
        let node = this.root;
    
        for(let char of word){
            if(!node.children[char]){
                return [];
            }
            node = node.children[char];
        }
    
        let list = [];
        this.collectWords(node,word,list);
        return list;
    }
    
    collectWords(node,word,list){
        if(node.isEndOfWord){
            list.push(word);
        }
    
        for(let char in node.children){
            this.collectWords(node.children[char],word+char,list);
        }
    }
    
}

const trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("banana");
trie.insert("bat");
trie.insert("batman");

console.log(trie.search("apple"));  // true
console.log(trie.search("app"));    // true
console.log(trie.search("batman"));// true
console.log(trie.search("ban"));   // false

trie.delete("app");
console.log(trie.search("app"));    // false
console.log(trie.startsWith("ba")); // true

console.log(trie.autocomplete("ba")); // ["banana", "bat", "batman"]
