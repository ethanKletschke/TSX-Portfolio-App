import AlertBox from "../../comps/Dialogs/AlertBox";
import ConfirmBox from "../../comps/Dialogs/ConfirmBox";
import FormBox from "../../comps/Dialogs/FormBox";
import Footer from "../../comps/Footer/Footer";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";

export default function DialogsDemo() {
  return (
    <main>
      <Header>
        Dialog Box Demo
      </Header>

      <article id="main-body">
        <AlertBox alertTitle="Alert">
          This is an alert!
        </AlertBox>

        <ConfirmBox>
          Are you sure you want to do an action?
        </ConfirmBox>

        <FormBox />

        <GoHomeBtn />
      </article>

      <Footer />
    </main>
  );
}
