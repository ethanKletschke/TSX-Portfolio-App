import type { ReactNode } from "react";
import { useId } from "react";

/**
 * The description list item
 */
export type DescListItem = {
  dtContent: ReactNode; // <dt> Content
  ddContent: ReactNode; // <dd> Content
};

type Props = {
  items: DescListItem[] // The <dl> items
};

export function DescriptionList({ items }: Props) {
  // Generate an ID for the items' mapped keys
  const id = useId();

  return (
    <dl>
      {/* Generate  */}
      {items.map(({ dtContent, ddContent }) => (
        <div key={`DL-${id}`}>
          <dt>{dtContent}</dt>
          <dd>{ddContent}</dd>
        </div>
      ))}
    </dl>
  );
}
