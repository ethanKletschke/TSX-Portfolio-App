// A tuple for testing multiple values at once.
type testTuple<T = string, K = T> = [value: T, expected: K, msg?: string];

export default testTuple;
