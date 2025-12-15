export default function validateEmail(email: string): boolean {
  // Declare a RegExp for emails only (disallows localhost addresses)
  const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gim;

  // Returns if the email is valid as per the RegExp above
  return re.test(email);
}
