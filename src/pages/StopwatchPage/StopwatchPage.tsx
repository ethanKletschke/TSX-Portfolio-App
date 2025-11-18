import Footer from "../../comps/Footer/Footer";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";
import MainBody from "../../comps/MainBody/MainBody";
import Stopwatch from "../../comps/Stopwatch/Stopwatch";

export default function StopwatchPage() {
  return (
    <main>
      <Header>
        Stopwatch
      </Header>

      <MainBody>
        {/* Stopwatch Component with buttons and headings */}
        <Stopwatch/>

        <hr />

        {/* button to return to the index route. */}
        <GoHomeBtn />
      </MainBody>

      <Footer />
    </main>
  );
}
