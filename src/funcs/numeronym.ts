export default function numeronym(word: string): string {
  // If the word only contains 2 or less characters
  if (word.length <= 2) {
    // Return the word as-is.
    return word;
  }

  // TODO -> Add "temp" variable that stores only the first word entered up to the first whitespace.
  let result = "";

  // Build the numeric acronym
  result = word.charAt(0); // Append the first letter
  result += String(word.length - 2); // Count of every letter in between
  result += word.charAt(word.length - 1); // Last letter

  // Convert to all lowercase and return the acronym.
  return result.toLowerCase();
}
