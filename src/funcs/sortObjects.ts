// Credit: https://chatgpt.com/s/t_68ac09182a6c8191b1ff20515e426fea
export default function sortObjects<T, K extends keyof T>(
  objs: T[], 
  prop: K, 
  desc: boolean = false
): T[] {
  return objs.sort((a, b) => {
    // Store the property values
    const valA: T[K] = a[prop], valB: T[K] = b[prop];

    let comparison: number = 0;

    // If the property is a number
    if (typeof valA === 'number' && typeof valB === 'number') {
      // Store the sort result in "comparison"
      comparison = valA - valB;
    } else if (typeof valA === 'string' && typeof valB === 'string') {
      // Store the sort result in "comparison"
      comparison = valA.localeCompare(valB);
    }

    // Sorts either in descending or ascending order depending on 
    // the "desc" parameter
    return desc ? -comparison: comparison;
  });
}
