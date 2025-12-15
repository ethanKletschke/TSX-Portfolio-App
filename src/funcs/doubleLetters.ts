export default function doubleLetters(initial: string): string {
  let result = ""; // Result to return
  let prefix = ""; // The prefix to append

  for (let i = 0; i < initial.length; i++) {
    // If the character encountered is not whitespace
    if (!/\s/g.test(initial[i])) {
      // Build a new string with the repeated letters
      prefix += initial[i];

      // append the repeated letters
      result += prefix;
    } else {
      // Reset prefix when encountering whitespace
      prefix = "";

      // This makes sure every word in an entered sentence repeats itself.
      // So "hey there" would become "hheheytththetherthere".
    }
  }

  // Return the modified sentence
  return result;
}
