import { useState } from "react";
import Page from "../../comps/general_UI/layout/Page/Page";
import Temperatures from "../../funcs/Temperatures";

export default function TempConvert() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  // const [kelvin, setKelvin] = useState(0);

  function handleC_to_F_Submit() {

  }

  return (
    <Page headerText="Temperature Conversions">
      <form onSubmit={handleC_to_F_Submit}>
        <fieldset>
          <legend>Celsius to Fahrenheit</legend>
        </fieldset>
      </form>
    </Page>
  );
}
