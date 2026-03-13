import { useState } from "react";
import Form from "../../comps/general_UI/Form/Form";
import Page from "../../comps/general_UI/layout/Page/Page";
import Temperatures from "../../funcs/Temperatures";

export default function TempConvert() {
  // State
  const [celsius, setCelsius] = useState(0); // Celsius input
  const [fahrenheit, setFahrenheit] = useState(0); // Fahrenheit output

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelsius(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFahrenheit(Temperatures.celsiusToFahrenheit(celsius));
  };

  return (
    <Page headerText="Temperature Conversions">
      <Form submitHandler={handleSubmit}>
        <fieldset>
          <legend>Celsius to Fahrenheit</legend>

          <label htmlFor="cels">
            Celsius
          </label>
          <input
            type="number"
            id="cels"
            name="cels"
            value={celsius}
            onChange={handleCelsiusChange}
          />

          <label htmlFor="fah">
            Fahrenheit
          </label>
          <input
            type="string"
            id="fah"
            name="fah"
            value={fahrenheit.toFixed(2) + "°F"}
            readOnly
          />

          <input type="submit" value="Convert" />
        </fieldset>
      </Form>
    </Page>
  );
}
