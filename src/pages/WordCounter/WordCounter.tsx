import Form from "../../comps/general_UI/Form/Form";
import Page from "../../comps/general_UI/layout/Page/Page";

export default function WordCounter() {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Page headerText="Word Counter">
      <Form submitHandler={handleSubmit}>
        {/* Placeholder to avoid error */}
        <input type="hidden" />
      </Form>
    </Page>
  );
}
