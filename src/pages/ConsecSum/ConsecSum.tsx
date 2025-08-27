import { useState } from "react";
import Footer from "../../comps/Footer/Footer.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";
import Header from "../../comps/Header/Header.tsx";

export default function ConsecSum() {
  const [value, setValue] = useState<number>(0);
  const [numToAdd, setNumToAdd] = useState<number>(1);
  const [step, setStep] = useState<number>(1);

  const handleNumAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setNumToAdd(Number(e.target.value));
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(`Error: ${err.message}`);
        setNumToAdd(-1);
      } else {
        alert(`Other: ${err}`);
        setNumToAdd(-1);
      }
    }
  };

  const handleStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setStep(Number(e.target.value));
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(`Error: ${err.message}`);
        setStep(1);
      } else {
        alert(`Other: ${err}`);
        setStep(1);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue(() => value + (numToAdd * step));
  };

  return (
    <main>
      <Header>
        Consecutive Summation
      </Header>

      <article id="main-body">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Consecutive Summation</legend>
            <label htmlFor="currentVal">Current Value</label>
            <input 
              type="number" 
              name="currentVal" 
              id="currentVal"
              value={value || 0}
              readOnly
            />
          </fieldset>
          <fieldset>
            <legend>Input</legend>
            <label htmlFor="numAdd">Number to Add</label>
            <input
              type="number"
              name="numAdd"
              id="numAdd"
              value={numToAdd || 1}
              onChange={handleNumAdd}
              min={1}
              max={999_999}
            />
            <label htmlFor="step">Step:</label>
            <input
              type="number"
              name="step"
              id="step"
              value={step || 1}
              onChange={handleStep}
              min={1}
              max={100}
            />
            <input type="submit" value={`Add ${numToAdd} to ${value}, ${step} time(s)`} />
          </fieldset>
        </form>

        <GoHomeBtn />
      </article>

      <Footer />
    </main>
  );
}
