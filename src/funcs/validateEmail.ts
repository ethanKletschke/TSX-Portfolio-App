export default function validateEmail(email: string): boolean {
  // Declare a RegExp for emails only (no localhost)
  const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gim;

  // Returns if the email is valid as per the RegExp
  return re.test(email);
}
