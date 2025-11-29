import { useState } from "react";
import Form from "../../comps/Form/Form";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import validateEmail from "../../funcs/validateEmail";
import styles from "./EmailValidate.module.css";
import Page from "../../comps/Page/Page";

// Email Validator page
export default function EmailValidate() {
  // Store email in state.
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // Email input change handler
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Set the email to the value entered by the user
    setEmail(event.target.value);
  };

  return (
    <Page headerText="Validate Email">
      <img src="/Mail.png" alt="Mail logo" className={styles.mailImg} />

      <Form submitHandler={handleSubmit}>
        <label htmlFor="email-addr">Enter Email Below:</label>
        <input
          autoComplete="email" // Provide email autocompletion
          type="text"
          name="email-addr"
          id="email-addr"
          value={email || ""}
          onChange={handleEmailChange} // attach the email onChange handler
          placeholder="Email to Validate..."
        />

        {/* Email output  */}
        <label htmlFor="email-output" className={styles["out-lbl"]}>Is the email valid?</label>&nbsp;
        {/* Output if the email is valid or not as the user types (yes or no) */}
        <output name="email-output" htmlFor="email-addr">{(validateEmail(email) ? "Yes" : "No")}</output>
      </Form>

      {/* Button to return to index route */}
      <GoHomeBtn /> 
    </Page>
  );
}
