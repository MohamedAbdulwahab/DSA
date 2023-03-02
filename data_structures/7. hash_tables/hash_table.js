/* Hash Table class */
class HashTable {
  /* the default size of the array is 53 */
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  /* hash: defines the hashing funciton that is being used for the Hash Table */
  _hash(key) {
    let total = 0;
    /* a prime number is needed to reduce the amount of collisions */
    let prime = 31;

    /* assume the length of the key values isn't > 100 */
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = String(key[i]).charCodeAt(0) - 96;

      /* mutiple by prime number to produce a more uniform distribution */
      total = (total * prime + value) % this.keyMap.length;
    }

    /* return the total */
    return total;
  }

  /* set: accepts a key and a value; store the key-value pair in the hash table array (using separate chaining) */
  set(key, value) {
    /* hash the key to get an index to store in the hash table array */
    const index = this._hash(key);

    /* check if the hash table array at that index is empty */
    if (!this.keyMap[index]) {
      /* insert an empty array at index position in the hash table array */
      this.keyMap[index] = [];
    }

    /* the hash table array at that index is NOT empty: push the key-value pair into the array at that index */
    this.keyMap[index].push([key, value]);
  }
}
