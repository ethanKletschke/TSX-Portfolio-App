import type { DescListItem } from "../../comps/general_UI/DescriptionList/DescriptionList";
import { DescriptionList } from "../../comps/general_UI/DescriptionList/DescriptionList";
import GoHomeBtn from "../../comps/general_UI/GoHomeBtn/GoHomeBtn";
import Page from "../../comps/general_UI/layout/Page/Page";

export default function DescriptionListDemo() {
  const items: DescListItem[] = [
    {
      dtContent: "React",
      ddContent: (
        // Fragment used as a multiline string
        <>
          A frontend framework developed by Facebook that lets
          you build user interfaces out of individual components.
        </>
      )
    },
    {
      dtContent: "JavaScript",
      ddContent: (
        // Fragment used as a multiline string
        <>
          JavaScript is the programming language of the web. It can
          calculate, manipulate and validate data for web pages.
        </>
      )
    },
    {
      dtContent: "HTML",
      ddContent: "HTML is the standard markup language for creating web pages."
    }
  ];

  return (
    <Page headerText="Description List Demo">
      <DescriptionList items={items} />

      <hr />

      <GoHomeBtn />
    </Page>
  );
}
