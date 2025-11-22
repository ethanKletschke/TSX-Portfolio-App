import AlertBox from "../../comps/Dialogs/AlertBox";
import ConfirmBox from "../../comps/Dialogs/ConfirmBox";
import FormBox from "../../comps/Dialogs/FormBox";
import Footer from "../../comps/Footer/Footer";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";
import MainBody from "../../comps/MainBody/MainBody";

export default function DialogsDemo() {
  return (
    <main>
      <Header>
        Dialog Box Demo
      </Header>

      <MainBody>
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
      </MainBody>

      <Footer />
    </main>
  );
}
