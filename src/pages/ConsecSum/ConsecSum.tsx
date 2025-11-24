import { useState } from "react";
import Footer from "../../comps/Footer/Footer.tsx";
import Form from "../../comps/Form/Form.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";
import Header from "../../comps/Header/Header.tsx";
import MainBody from "../../comps/MainBody/MainBody.tsx";

export default function ConsecSum() {
  // Current value
  const [value, setValue] = useState<number>(0);
  // The number to add
  const [numToAdd, setNumToAdd] = useState<number>(0);
  // The number of times to add the number above
  const [step, setStep] = useState<number>(0);

  // Handler for changing the "Number to Add" field
  const handleChangeNumAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Cast the input to a number and set the state of that number.
    setNumToAdd(Number(e.target.value));
  };

  // Handles the change in step
  const handleChangeStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Cast the input to a number and set the state for the step.
    setStep(Number(e.target.value));
  };

  // Submit event handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default submit behaviour (page refresh on submit)
    e.preventDefault();

    // Set the current value to the number entered by the user multiplied by the step.
    setValue(prev => prev + (numToAdd * step));
  };

  return (
    <main>
      {/* Header Component */}
      <Header>
        Consecutive Summation
      </Header>

      {/* Main page body */}
      <MainBody>
        <Form submitHandler={handleSubmit}>
          {/* Output Fieldset */}
          <fieldset>
            <legend>Consecutive Summation</legend>

            <label htmlFor="currentVal">Current Value</label>
            <output id="currentVal" name="currentVal">
              {value.toLocaleString()}
            </output>
          </fieldset>
          {/* Input Fieldset */}
          <fieldset>
            <legend>Input</legend>

            <label htmlFor="numAdd">Number to Add</label>
            <input
              autoComplete="off"
              type="text"
              name="numAdd"
              id="numAdd"
              // Value via state (or 1 if state evaluates to false).
              value={numToAdd}
              onChange={handleChangeNumAdd} // Attach the number add event handler.
              required
            />
            {/* Number of times to add the number */}
            <label htmlFor="step">Step:</label>
            <input
              autoComplete="off"
              type="text"
              name="step"
              id="step"
              value={step}
              onChange={handleChangeStep}
              required
            />
            {/* Submit button */}
            <input 
              type="submit" 
              value={`Add ${numToAdd.toLocaleString()} to ${value.toLocaleString()}, ${step.toLocaleString()} time(s)`} 
            />
          </fieldset>
        </Form>

        {/* Button to return to index route */}
        <GoHomeBtn />
      </MainBody>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}
