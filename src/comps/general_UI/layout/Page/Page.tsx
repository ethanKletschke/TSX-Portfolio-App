import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";

type PageProps = {
  headerText: string;
  // TODO -> Import ReactNode instead.
  children: React.ReactNode;
};

// The root element for a single router page.
export default function Page({ headerText, children }: PageProps) {
  return (
    <main>
      {/* TODO -> Refactor according to proposed change to <Header> */}
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
