import Footer from "../../comps/Footer/Footer";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";

// 404 Page
export default function NoPage() {
  return (
    <main>
      {/* Header component */}
      <Header>
        Oops! 404 Error.
      </Header>

      {/* Main page body */}
      <article id="main-body">
        {/* Button to return to index route */} 
        <GoHomeBtn />
      </article>

      {/* Footer component */}
      <Footer />
    </main>
  );
}
