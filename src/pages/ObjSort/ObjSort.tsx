import Footer from "../../comps/Footer/Footer.tsx";
import Form from "../../comps/Form/Form.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";
import Header from "../../comps/Header/Header.tsx";
import MainBody from "../../comps/MainBody/MainBody.tsx";
import WorkInProg from "../../comps/WorkInProg/WorkInProg.tsx";
import sortObject from "../../funcs/sortObjects.ts";

// Object Sorting Component
export default function ObjSort() {
  // Submit event handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh on form submission
    e.preventDefault();
  };

  return (
    <main>
      {/* Main header component */}
      <Header>
        Object Sort
      </Header>

      {/* Main page body */}
      <MainBody>
        {/* Indicate the page is a WIP */}
        <WorkInProg />

        <Form submitHandler={handleSubmit}>
          <button type="submit">
            Submit
          </button>
        </Form>

        {/* Button to return to index route */}
        <GoHomeBtn />
      </MainBody>

      {/* Footer component */}
      <Footer />
    </main>
  );
}
