// Credit: https://chatgpt.com/s/t_68ac09182a6c8191b1ff20515e426fea
export default function sortObjects<T, K extends keyof T>(objs: T[], prop: K): T[] {
  return objs.sort((a, b) => {
    // Store the property values
    const valA: T[K] = a[prop], valB: T[K] = b[prop];

    if (typeof valA === 'number' && typeof valB === 'number') {
      return valA - valB;
    }

    if (typeof valA === 'string' && typeof valB === 'string') {
      return valA.localeCompare(valB);
    }

    return 0;
  });
}
