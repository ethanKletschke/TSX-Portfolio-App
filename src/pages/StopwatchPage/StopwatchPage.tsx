import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Page from "../../comps/Page/Page";
import Stopwatch from "../../comps/Stopwatch/Stopwatch";

export default function StopwatchPage() {
  return (
    <Page headerText="Stopwatch">
      {/* Stopwatch Component with buttons and headings */}
      <Stopwatch />

      <hr />

      {/* button to return to the index route. */}
      <GoHomeBtn />
    </Page>
  );
}
