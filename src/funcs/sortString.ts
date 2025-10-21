// Sorts a string alphabetically
export default function sortString(str: string): string {
  // Return the argument if it is an empty string.
  if (str === "") return str;
  
  // Convert the string into a character array.
  const tempArr: string[] = str.split('');
  
  // Sort the character array case- and accent-insensitively.
  tempArr.sort((a: string, b: string) => a.localeCompare(b, undefined, { sensitivity: "base" }));

  // store the new string by joining the elements of the array with no delimiter 
  // and trimming extra whitespace on the ends.
  const newStr: string = tempArr.join("").trim();

  // Return the new, fully sorted string.
  return newStr;
}
