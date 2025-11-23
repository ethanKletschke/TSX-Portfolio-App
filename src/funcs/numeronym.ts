export default function numeronym(word: string): string {
  if (word.length <= 2) {
    return word;
  }

  let result: string = "";

  result = word.charAt(0); // First letter
  result += String(word.length - 2); // Count of every letter in between
  result += word.charAt(word.length - 1); // Last letter

  // Convert to all lowercase
  return result.toLowerCase();
}
