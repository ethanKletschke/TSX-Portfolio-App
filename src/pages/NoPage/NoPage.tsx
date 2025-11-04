import { Link } from "react-router-dom";
import Footer from "../../comps/Footer/Footer";
import Header from "../../comps/Header/Header";
import styles from "./NoPage.module.css";

// Page displayed when a route isn't found
export default function NoPage() {
  return (
    <main>
      {/* Header component */}
      <Header>
        Oops! Error 404...
      </Header>

      {/* Main page body */}
      <article id="main-body">
        <p className={styles.notExist}>
          This page does not exist.<br />
          <Link to="/">Go back to the home page</Link>?
        </p>

        <hr /> 
      </article>

      {/* Footer component */}
      <Footer />
    </main>
  );
}
