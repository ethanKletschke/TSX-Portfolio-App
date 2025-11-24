// A tuple for testing multiple values at once.
type TestTuple<
  // Current value (of type string by default)
  T = string,
  // Expected value, set to string by default (or the type of T if not specified)
  K = T
> = readonly [value: T, expected: K];

export default TestTuple;
