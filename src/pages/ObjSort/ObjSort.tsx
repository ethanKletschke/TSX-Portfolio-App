import Footer from "../../comps/Footer/Footer.tsx";
import Form from "../../comps/Form/Form.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";
import Header from "../../comps/Header/Header.tsx";
import MainBody from "../../comps/MainBody/MainBody.tsx";
import WorkInProg from "../../comps/WorkInProg/WorkInProg.tsx";
import sortObject from "../../funcs/sortObjects.ts";

// Object Sorting Component
export default function ObjSort() {
<<<<<<< HEAD
=======
  // The class for the object(s) to sort
  class Person {
    private id: number;
    private fname: string;
    private lname: string;

    constructor(id: number, fname: string, lname: string) {
      this.id = id;
      this.fname = fname;
      this.lname = lname;
    }

    get personID() {
      return this.id;
    }

    get firstName() {
      return this.fname;
    }

    get lastName() {
      return this.lname;
    }
  }

  type FieldsToSortBy = keyof Person;

  // State
  const [id, setId] = useState<string>(""); // Person ID
  const [fname, setFname] = useState<string>(""); // Person first name
  const [lname, setLname] = useState<string>(""); // PErson surname
  const [toSortBy, setToSortBy] = useState<FieldsToSortBy | "">(""); // Field to sort by
  const [outputTxt, setOutputTxt] = useState<string>(""); // the Output Text
  const [objs, setObjs] = useState<Person[]>([]); // Object array to sort

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleFnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFname(e.target.value);
  };

  const handleLnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLname(e.target.value);
  };

  const handleCreateClick = () => {
    if (id === "" || fname === "" || lname === "") {
      alert("Field(s) missing.");
      return;
    }
    // Create a new Person object with the values entered by the user.
    const p = new Person(Number(id), fname, lname);

    // Append the new person to the array of objects.
    setObjs(prev => [...prev, p]);
  };

  const handleClear = () => {
    setId("");
    setFname("");
    setLname("");
    setToSortBy("");
    setOutputTxt("");
    setObjs([]);
  }

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToSortBy(e.target.value as FieldsToSortBy);
  };

>>>>>>> 53c9f25 (feat(ui): Finish ObjSort Page)
  // Submit event handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh on form submission
    e.preventDefault();
<<<<<<< HEAD
=======
  };

  const handleSortClick = () => {
    // Output string to display
    let toOutput: string = ""; 
    
    if (objs.length === 0) {
      toOutput = "No people were made yet!";
    } else {
      // Sort the array of objects with my own function
      const sorted = sortObject(objs, (toSortBy as FieldsToSortBy));

      sorted.forEach((prsn) => {
        toOutput += `ID${prsn.personID}: ${prsn.firstName} ${prsn.lastName}\n`;
      });
    }

    setOutputTxt(toOutput); 
>>>>>>> 53c9f25 (feat(ui): Finish ObjSort Page)
  };

  return (
    <main>
      {/* Main header component */}
      <Header>
        Object Sort
      </Header>

      {/* Main page body */}
      <MainBody>
        {/* Indicate the page is a WIP */}
        <WorkInProg />

        <Form submitHandler={handleSubmit}>
<<<<<<< HEAD
          <button type="submit">
            Submit
          </button>
=======
          <fieldset>
            <legend>Create Object</legend>

            <label htmlFor="personId">
              ID (3-digits)
            </label>
            <input
              id="personId"
              name="personId"
              onChange={handleIdChange}
              maxLength={3}
              pattern="[0-9][0-9][0-9]"
              placeholder="ID#"
              required
              type="text"
              value={id}
            />

            <label htmlFor="fname">First Name</label>
            <input
              id="fname"
              name="fname"
              onChange={handleFnameChange}
              placeholder="First name..."
              required
              type="text"
              value={fname}
            />

            <label htmlFor="lname">Last Name</label>
            <input
              id="lname"
              name="lname"
              onChange={handleLnameChange}
              placeholder="Last name..."
              required
              type="text"
              value={lname}
            />

            <button 
              onClick={handleCreateClick}
              type="button"
            >
              Create
            </button>

          </fieldset>

          {/* Output */}
          <fieldset>
            <legend>Output</legend>

            <label htmlFor="sort-by">Sort By:</label>
            <select 
              onChange={handleSortByChange}
              required
              value={toSortBy}
            >
              {/* Placeholder option */}
              <option value="" disabled>Select a Field...</option>

              {/* Actual options */}
              <option value="personId">Person ID</option>
              <option value="fname">First Name</option>
              <option value="lname">Last Name</option>
            </select>
            
            {/* Submit Button */}
            <button type="button"
              onClick={handleSortClick}>
              Sort
            </button>

            <label htmlFor="output-text">
              {/* e.g. People sorted by key "personId" */}
              People{toSortBy && (
                <span>
                  &nbsp;sorted by key "<code>{toSortBy}</code>":
                </span>
              )}
            </label>
            <textarea 
              name="output-text" 
              id="output-text"
              value={outputTxt}
              readOnly
            />
          </fieldset>

          <button type="button" onClick={handleClear}>Reset</button>
>>>>>>> 53c9f25 (feat(ui): Finish ObjSort Page)
        </Form>

        {/* Button to return to index route */}
        <GoHomeBtn />
      </MainBody>

      {/* Footer component */}
      <Footer />
    </main>
  );
}
