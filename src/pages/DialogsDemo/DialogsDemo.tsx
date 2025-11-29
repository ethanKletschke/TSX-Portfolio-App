import AlertBox from "../../comps/Dialogs/AlertBox";
import ConfirmBox from "../../comps/Dialogs/ConfirmBox";
import FormBox from "../../comps/Dialogs/FormBox";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Page from "../../comps/Page/Page";

export default function DialogsDemo() {
  return (
    <Page headerText="Dialog Box Demo">
      {/* Alert Box */}
      <AlertBox alertTitle="Alert">
        <p>This is an alert!</p>
      </AlertBox>

      {/* Confirm Box */}
      <ConfirmBox>
        Are you sure you want to do an action?
      </ConfirmBox>

      {/* Form Box */}
      <FormBox />

      <GoHomeBtn />
    </Page>
  );
}
