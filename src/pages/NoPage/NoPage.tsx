import Footer from "../../comps/Footer/Footer";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";

export default function NoPage() {
  return (
    <main>
      <Header>
        Oops! 404 Error.
      </Header>

      <article id="main-body">
            
        <GoHomeBtn />
      </article>

      <Footer />
    </main>
  );
}
