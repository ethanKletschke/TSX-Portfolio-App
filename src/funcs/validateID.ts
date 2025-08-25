// Validates South African ID numbers
export default function validateID(id: string): boolean {
  // Test if the ID is exactly 13 digits
  if (!id.match(/\d{13}/)) return false;

  // Return false anyways until the function is implemented
  return false;
}
