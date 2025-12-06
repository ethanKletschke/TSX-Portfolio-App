import Page from "../../comps/Page/Page.tsx";
import Card from "../../comps/Card/Card.tsx";
import CardGrid from "../../comps/CardGrid/CardGrid.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";

export default function CardsDemo() {
  return (
    <Page headerText="Cards Demo">
      <section>
        <h2>Basic Cards</h2>

        <CardGrid>
          <Card
            title="Paris"
            footerText="Come to Paris today!"
            imgCaption="The Eiffel Tower"
            imgSrc="/Eiffel.png"
          >
            <p> 
              Paris is the capital (and most well-known) city in
              France. It is home to the world-renowned Eiffel Tower. Paris is also
              known as the city of love.
            </p>
          </Card>

          <Card
            title="Moscow"
            footerText="Come to Moscow today!"
            imgCaption="Saint Basil's Cathedral in Moscow"
            imgSrc="/Moscow.jpg"
          >
            <p>
              Moscow is the capital city of Russia. The Saint Basil's Cathedral
              pictured above is situated in Moscow's Red Square, and is iconic 
              for its unique and beautiful appearance.
            </p>
          </Card>

          <Card
            title="New York City"
            footerText="Come to New York today!"
            imgCaption="Statue of Liberty"
            imgSrc="/Liberty.png"
          >
            <p>
              New York City is a major city in the USA. It is home to the 
              Statue of Liberty, a copper statue gifted to the US by France.
              It has since corroded from a bronze colour to a dull green.
            </p>
          </Card>
        </CardGrid>
      </section>

      <hr />
{/* 
      <section>
        <h2>User Cards</h2>
      </section>

      <hr /> */}

      <GoHomeBtn />
    </Page>
  );
}
