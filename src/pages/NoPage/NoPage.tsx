import { Link } from "react-router-dom";
import Footer from "../../comps/Footer/Footer";
import Header from "../../comps/Header/Header";
import styles from "./NoPage.module.css";

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
        <p className={styles.notExist}>
          This page does not exist. Please go back to <Link to="/">the home page</Link>!
        </p>

        <hr /> 
      </article>

      {/* Footer component */}
      <Footer />
    </main>
  );
}
