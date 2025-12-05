import type { ReactNode } from "react";

// Possible props for all the card components.
export type DefaultCardProps = {
  title: string; // Card title/header text
  subtitle?: string; // Card subtitle
  icon?: string; // Icon string
  imgSrc?: string; // Source to card image
<<<<<<< HEAD
  imgCaption?: string; // Caption for image
  children?: ReactNode; // Card children components
  footerText?: string; // Text for footer
=======
  children?: ReactNode; // Card children components
  footerText?: string;
>>>>>>> 5a9c322 (wip(feat): Start Card component)
  visible?: boolean; // Is the card initially visible?
};
