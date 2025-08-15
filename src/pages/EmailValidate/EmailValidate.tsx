import { useState } from "react";
import GoHomeBtn from "../comps/GoHomeBtn/GoHomeBtn";
import Header from "../comps/Header/Header";
import validateEmail from "../funcs/validateEmail";

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

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email-addr">Enter Email Below:</label><br />
        <input 
          type="text"
          name="email-addr"
          id="email-addr"
          value={email || ""}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email-output">Is the email valid?</label><br />
        <output name="email-output">{(validateEmail(email) ? "Yes" : "No")}</output>
      </form>

      <hr />

      <GoHomeBtn />
    </main>
  );
}
