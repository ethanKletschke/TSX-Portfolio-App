import GoHomeBtn from "../../comps/general_UI/GoHomeBtn/GoHomeBtn";
import Page from "../../comps/general_UI/layout/Page/Page.tsx";
import Stopwatch from "../../comps/general_UI/Stopwatch/Stopwatch";

export default function StopwatchPage() {
  return (
    <Page headerText="Stopwatch">
      {/* Stopwatch Component with buttons and headings */}
      <Stopwatch />

      <hr />

      {/* button to return to the home page */}
      <GoHomeBtn />
    </Page>
  );
}
