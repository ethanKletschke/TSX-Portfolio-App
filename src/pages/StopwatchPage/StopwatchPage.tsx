import Footer from "../../comps/Footer/Footer";
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
      </article>

      <Footer />
    </main>
  );
}
