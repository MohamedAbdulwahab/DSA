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

  /* get: accepts a key and retrieves the key-value pair if it exists; returns null otherwise */
  get(key) {
    /* hash the key to get the index in the hash table array */
    const index = this._hash(key);

    /* find the bucket that is supposed to hold the key-value pair */
    const bucket = this.keyMap[index];

    /* a bucket exists and it contains an array */
    if (bucket) {
      /* iterate over this bucket's array */
      for (let i = 0; i < bucket.length; i++) {
        /* find the array that matches the key */
        if (bucket[i][0] === key) {
          /* return the value of that key */
          return bucket[i][1];
        }
      }
    } else {
      /* the key does not exist in the hash table */
      return null;
    }
  }

  /* keys: returns all the keys in the hash table */
  keys() {
    const keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      /* define a bucket */
      let bucket = this.keyMap[i];

      /* a bucket exists and it contains an array */
      if (bucket) {
        /* iterate over all the arrays in the bucket */
        for (let j = 0; j < bucket.length; j++) {
          /* only push each key once (no duplicate keys allowed) */
          if (!keysArr.includes(bucket[j][0])) {
            /* push the non-duplicate keys */
            keysArr.push(bucket[j][0]);
          }
        }
      }
    }

    /* return the keys array */
    return keysArr;
  }

  /* values: returns all the values in the hash table */
  values() {
    const valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      /* define a bucket */
      let bucket = this.keyMap[i];

      /* a bucket exists and it contains an array */
      if (bucket) {
        /* iterate over all the arrays in the bucket */
        for (let j = 0; j < bucket.length; j++) {
          /* only push each value once (no duplicate values allowed) */
          if (!valuesArr.includes(bucket[j][1])) {
            /* push the non-duplicate value */
            valuesArr.push(bucket[j][1]);
          }
        }
      }
    }

    /* return the values array */
    return valuesArr;
  }
}
