export default function doubleLetters(initial: string): string {
  let result = ""; // Result to return
  let prefix = ""; // 

  for (let i = 0; i < initial.length; i++) {
    // Excluding whitespace
    if (!/\s/g.test(initial[i])) {
      // Build a new string with the repeated letters
      prefix += initial[i];

      // append the repeated letters
      result += prefix;
    } else {
      // Reset prefix when encountering whitespace
      prefix = "";
    }
  }

  return result;
}
