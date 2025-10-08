type map<Key extends string | number, Value extends string | number> = { 
  key: Key; value: Value 
}[];

export default class HashMap<K extends string | number, V extends string | number> {
  private size: number = 0;
  private buckets: map<K, V>[] = [];

  constructor(size: number = 100) {
    // Set the size of the map
    this.size = size;

    this.buckets = Array.from({ length: size }, () => [] as { key: K; value: V }[]);
  }

  public addToMap(key: K, value: V): void {
    let index: number = this.hashFunc(key);
    let bucket: map<K, V> = this.buckets[index];

    // Check if key already exists and update value
    const existing = bucket.find(entry => entry.key === key);

    if (existing) {
      // Set the existing value to a new value
      existing.value = value;
    } else {
      // Add the new value
      bucket.push({ key, value });
    }
  }

  public getKey(key: K): V | undefined {
    // Find the index of the bucket to use.
    const index: number = this.hashFunc(key);
    // Get the bucket as per the hash function's returned index  
    const bucket: map<K, V> = this.buckets[index];

    // Find the value in the bucket.
    const entry = bucket.find(e => e.key === key);

    // Return the value or undefined
    return entry?.value;
  }

  public remove(key: K): V | undefined {
    // Get the index of the bucket
    const index = this.hashFunc(key);
    // Get the bucket to remove from
    const bucket = this.buckets[index];

    // Find the index of the value to remove.
    const entryIndex = bucket.findIndex(e => e.key === key);

    // If the value is not found
    if (entryIndex !== -1) {
      // return the removed value
      const [removed] = bucket.splice(entryIndex, 1);
      return removed.value;
    }

    // Return nothing if the value isn't found
    return undefined;
  }

  private hashFunc(key: K): number {
    let sum: number = 0;

    for (let i = 0; i < String(key).length; i++) {
      // Find the sum of the key's character codes.
      sum += String(key).charCodeAt(i);
    }

    // Get the sum modulo the size of the map, and return it.
    return sum % this.size;
  }
}
