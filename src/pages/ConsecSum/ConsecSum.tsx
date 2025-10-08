import { useState } from "react";
import Footer from "../../comps/Footer/Footer.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";
import Header from "../../comps/Header/Header.tsx";

export default function ConsecSum() {
  // Current value
  const [value, setValue] = useState<number>(0);
  // The number to add
  const [numToAdd, setNumToAdd] = useState<number>(1);
  // The number of times to add the number above
  const [step, setStep] = useState<number>(1);

  // Handler for changing the "Number to Add" field
  const handleChangeNumAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Cast the input to a number and set the state of that number.
    // No need for error handling, as this handler targets a number <input>
    setNumToAdd(Number(e.target.value));
  };

  // Handles the change in step
  const handleChangeStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Cast the input to a number and set the state for the step.
    // No need for error handling, as this handler targets a number <input>
    setStep(Number(e.target.value));
  };

  // Submit event handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default submit behaviour (page refresh on submit)
    e.preventDefault();
    
    // Set the current value to the number entered by the user multiplied by the step.
    setValue(() => value + (numToAdd * step));
  };

  return (
    <main>
      {/* Header Component */}
      <Header>
        Consecutive Summation
      </Header>

      {/* Main page body */}
      <article id="main-body">
        <form onSubmit={handleSubmit}>
          {/* Output Fieldset */}
          <fieldset>
            <legend>Consecutive Summation</legend>

            <label htmlFor="currentVal">Current Value</label>
            <output id="currentVal" name="currentVal">{value || 0}</output>
          </fieldset>
          {/* Input Fieldset */}
          <fieldset>
            <legend>Input</legend>

            <label htmlFor="numAdd">Number to Add</label>
            <input
              type="number"
              name="numAdd"
              id="numAdd"
              // Value via state (or 1 if state evaluates to false).
              value={numToAdd || 1}
              onChange={handleChangeNumAdd} // Attach the number add event handler.
              min={1}
              // Max input value is 999,999
              max={999_999}
            />
            {/* Number of times to add the number */}
            <label htmlFor="step">Step:</label>
            <input
              type="number"
              name="step"
              id="step"
              value={step || 1}
              onChange={handleChangeStep}
              min={1}
              max={100}
            />
            {/* Submit button */}
            <input type="submit" value={`Add ${numToAdd} to ${value}, ${step} time(s)`} />
          </fieldset>
        </form>

        {/* Button to return to index route */}
        <GoHomeBtn />
      </article>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}
