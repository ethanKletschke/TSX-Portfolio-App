import { useState } from "react";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";
import validateEmail from "../../funcs/validateEmail";
import Footer from "../../comps/Footer/Footer";
import styles from "./EmailValidate.module.css";

// Email Validator page
export default function EmailValidate() {
  // Email stored as state.
  const [email, setEmail] = useState<string>("");

  // Email input change handler
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Set the email to the value entered by the user
    setEmail(event.target.value);
  };

  return (
    <main>
      {/* Header component */}
      <Header>
        Validate Email
      </Header>

      {/* Main Page Body */}
      <article id="main-body">
        <form onSubmit={(e) => e.preventDefault() /*  */}>
          <label htmlFor="email-addr">Enter Email Below:</label>
          <input 
            type="text"
            name="email-addr"
            id="email-addr"
            value={email || ""}
            onChange={handleEmailChange}
            placeholder="Email to Validate..."
          />

          <label htmlFor="email-output" className={styles["out-lbl"]}>Is the email valid?</label>&nbsp;
          {/* Output if the email is valid or not as the user types */}
          <output name="email-output" htmlFor="email-addr">{(validateEmail(email) ? "Yes" : "No")}</output>
        </form>

        {/* Button to return to index route */}
        <GoHomeBtn />
      </article>

      {/* Footer component */}
      <Footer />
    </main>
  );
}
