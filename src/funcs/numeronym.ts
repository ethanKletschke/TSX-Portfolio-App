export default function numeronym(word: string): string {
  // If the word only contains 2 or less characters
  if (word.length <= 2) {
    // Return the word as-is.
    return word;
  }

  let result = "";
  // stores only the first word entered up to the first whitespace.
  let temp = word.slice(0, word.match(/\s/)?.index);

  // Build the numeric acronym
  result = temp.charAt(0); // Append the first letter
  result += String(temp.length - 2); // Count of every letter in between
  result += temp.charAt(word.length - 1); // Last letter

  // Convert to all lowercase and return the acronym.
  return result.toLowerCase();
}
