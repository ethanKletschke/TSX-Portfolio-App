import Footer from "../../comps/Footer/Footer";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";
import Stopwatch from "../../comps/Stopwatch/Stopwatch";

export default function StopwatchPage() {
  return (
    <main>
      <Header>
        Stopwatch Example
      </Header>

      <article id="main-body">
        <Stopwatch/>

        <hr />

        <GoHomeBtn />
      </article>

      <Footer />
    </main>
  );
}
