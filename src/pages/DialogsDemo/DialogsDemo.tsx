import AlertBox from "../../comps/general_UI/Dialogs/AlertBox";
import ConfirmBox from "../../comps/general_UI/Dialogs/ConfirmBox";
import FormBox from "../../comps/general_UI/Dialogs/FormBox";
import GoHomeBtn from "../../comps/general_UI/GoHomeBtn/GoHomeBtn";
import Page from "../../comps/general_UI/layout/Page/Page";

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
