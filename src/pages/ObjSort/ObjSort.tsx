import Footer from "../../comps/Footer/Footer.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";
import Header from "../../comps/Header/Header.tsx";
import WorkInProg from "../../comps/WorkInProg/WorkInProg.tsx";
import sortObject from "../../funcs/sortObjects.ts";

// Object Sorting Component
export default function ObjSort() {
  return (
    <main>
      {/* Main header component */}
      <Header>
        Object Sort
      </Header>

      {/* Main page body */}
      <article id="main-body">
        {/* Indicate the page is a WIP */}
        <WorkInProg />

        {/* Button to return to index route */}
        <GoHomeBtn />
      </article>

      {/* Footer component */}
      <Footer />
    </main>
  );
}
