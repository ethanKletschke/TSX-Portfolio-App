import Page from "../../comps/Page/Page";

interface BasicCard {
  title: string;
}

export default function CardsDemo() {
  const basicCards: BasicCard[] = [
    {
      title: "Paris"
    }
  ];

  return (
    <Page headerText="Cards Demo">
      <h2>Basic Cards</h2>

      <hr />
    </Page>
  );
}
