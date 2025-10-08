import Footer from "../../comps/Footer/Footer.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";
import Header from "../../comps/Header/Header.tsx";
import WorkInProg from "../../comps/WorkInProg/WorkInProg.tsx";
import HashMap from "./HashMap";
import ResponseObject from "./ResponseObject.ts";

// Hash Map page with Response Code output
export default function HashMapPage() {
  return (
    <main>
      <Header>
        Response Codes
      </Header>

      {/* Main page body */}
      <article id="main-body">
        {/* Indicate that the page is a WIP */}
        <WorkInProg />

        {/* Button to return to index route */}
        <GoHomeBtn />
      </article>

      {/* Main footer of page (With copyright info) */}
      <Footer />
    </main>
  );
}
