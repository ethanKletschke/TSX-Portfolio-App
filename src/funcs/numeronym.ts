export default function numeronym(word: string): string {
  // stores only the first word entered up to the first whitespace or to the end of the string
  let temp = word.slice(0, word.match(/\s/)?.index || word.length);

  // If the word only contains 2 or less characters
  if (temp.length <= 2) {
    // Return the word as-is.
    return temp.toLowerCase();
  }

  let result = "";

  // Build the numeric acronym
  result = temp.charAt(0); // Append the first letter
  result += String(temp.length - 2); // Count of every letter in between
  result += temp.charAt(temp.length - 1); // Last letter

  // Convert to all lowercase and return the acronym.
  return result.toLowerCase();
}
