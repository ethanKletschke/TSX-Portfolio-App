export default function numeronym(word: string): string {
  let result: string = "";
  
  result = word.charAt(0); // First letter
  result += String(word.length - 2); // Count of every letter in between
  result += word.charAt(word.length - 1); //

  return result.toLowerCase();
}
