import type { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";

type PageProps = {
  headerText: string;
  children: ReactNode;
};

// The root element for a single router page.
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
