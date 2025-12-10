import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";

type PageProps = {
  headerText: string;
  children: React.ReactNode;
};

export default function Page({ headerText, children }: PageProps) {
  return (
    <main>
      <Header>
        {headerText}
      </Header>

      <MainBody>
        {children}
      </MainBody>

      <Footer />
    </main>
  );
}
