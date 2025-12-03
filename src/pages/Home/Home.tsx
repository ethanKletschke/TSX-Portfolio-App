import type { CardObj } from "../../comps/ContentsTable/ContentsTable";
import ContentsTable from "../../comps/ContentsTable/ContentsTable";
import Page from "../../comps/Page/Page";
import sortObjects from "../../funcs/sortObjects";
import styles from "./Home.module.css";


export default function Home() {
  const links: CardObj[] = [
    {
      route: "/aboutMe",
      title: "About Me",
      icon: "⚉",
      subtitle: "About Ethan Kletschke"
    },
    {
      route: "/consecutiveSum",
      title: "Consecutive Summation",
      icon: "+",
      subtitle: "Add numbers consecutively"
    },
    {
      route: "/dialogs",
      title: "Dialog Box Demo",
      icon: "██",
      subtitle: "A short demo for dialog boxes"
    },
    {
      route: "/dice",
      title: "Dice Rolling",
      icon: "⚂",
      subtitle: "Roll dice, just for fun"
    },
    {
      route: "/email",
      title: "Email Validator",
      icon: "✉",
      subtitle: "Validate email format"
    },
    {
      route: "/letterRep",
      title: "Letter Repetition",
      icon: "🄐🄐🄑",
      subtitle: "Repeat a sentence's letters"
    },
    {
      route: "/numeronyms",
      title: "Numeric Acronyms",
      icon: "🄰⑾🅈",
      subtitle: "Generate a numeric acronym"
    },
    {
      route: "/sentenceSort",
      title: "Sentence Sort",
      icon: "☷",
      subtitle: "Sort a sentence alphabetically"
    },
    {
      route: "/objSort",
      title: "Sort Objects",
      icon: "⚍",
      subtitle: "Sort person data by ID, name, or surname"
    },
    {
      route: "/stopwatch",
      title: "Stopwatch",
      icon: "🕑",
      subtitle: "A simple stopwatch"
    },
  ];

  const sortedLinks = sortObjects(links, "title");

  return (
    <Page headerText="Ethan Kletschke's Portfolio">
      {/* Heading with instruction */}
      <h2 className={styles.heading}>Select a Page to Go To</h2>

      <ContentsTable cards={sortedLinks} />
    </Page>
  );
}
