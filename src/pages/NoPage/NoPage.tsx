import { Link } from "react-router-dom";
import styles from "./NoPage.module.css";
import Page from "../../comps/general_UI/layout/Page/Page.tsx";

// Page displayed when a route isn't found
export default function NoPage() {
  return (
    <Page headerText="Oops! Error 404...">
      <p className={styles.notExist}>
        This page does not exist.<br />
        <Link to="/">Go back to the home page</Link>?
      </p>

      <hr /> 
    </Page>
  );
}
