import Footer from "../../comps/Footer/Footer.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";
import Header from "../../comps/Header/Header.tsx";
import sortString from "../../funcs/sortString.tsx";

export default function SentSort() {
  return (
    <main>
      <Header>
        Sort a Sentence
      </Header>

      <article id="main-body">
        <form>
          <fieldset>
            <legend>Enter Sentence</legend>
            <label htmlFor="">Sentence:</label>
            
          </fieldset>
        </form>

        <hr />
        <GoHomeBtn />
      </article>

      <Footer />
    </main>
  );
}
