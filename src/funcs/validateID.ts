export default function validateID(id: string): boolean {
  if (!id.match(/\d{13}/)) return false;

  return false;
}
