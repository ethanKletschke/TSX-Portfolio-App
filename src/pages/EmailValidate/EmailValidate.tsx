import { useState } from "react";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";
import validateEmail from "../../funcs/validateEmail";
import Footer from "../../comps/Footer/Footer";
import styles from "./EmailValidate.module.css";

export default function EmailValidate() {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <main>
      <Header>
        Validate Email
      </Header>

      <article id="main-body">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email-addr">Enter Email Below:</label>
          <input 
            type="text"
            name="email-addr"
            id="email-addr"
            value={email || ""}
            onChange={handleChange}
          />
          <label htmlFor="email-output" className={styles["out-lbl"]}>Is the email valid?</label>&nbsp;
          {/* Output if the email is valid or not */}
          <output name="email-output">{(validateEmail(email) ? "Yes" : "No")}</output>
        </form>

        <GoHomeBtn />
      </article>

      <Footer />
    </main>
  );
}
