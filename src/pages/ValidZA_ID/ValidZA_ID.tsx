import Footer from "../../comps/Footer/Footer";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";
import WorkInProg from "../../comps/WorkInProg/WorkInProg";
import validateID from "../../funcs/validateID";

export default function ValidZA_ID() {
  return (
    <main>
      <Header>
        Validate South African ID Number
      </Header>

      <article id="main-body">
        {/* Indicate the page is a WIP */}
        <WorkInProg />

        {/* Button to return to the index route */}
        <GoHomeBtn />
      </article>

      {/* Page footer with copyright */}
      <Footer />
    </main>
  );
}
