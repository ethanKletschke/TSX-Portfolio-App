import Footer from "../../comps/Footer/Footer";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";
import SkillProgress from "../../comps/SkillProgress/SkillProgress";
import WorkInProg from "../../comps/WorkInProg/WorkInProg";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <main>
      <Header>
        About Me
      </Header>

      <article id="main-body">
        <WorkInProg />

        <section className={styles["body-section"]}>
          <header>
            <h2>Who am I?</h2>
          </header>
          <article>
            <p>
              I, Ethan Kletschke, am an 18-year-old aspiring Web Developer 
              with experience dating back to high school with both software 
              and web apps. I'm mostly interested in web development, but am well-versed in 
              a wide variety of programming languages related to software and web apps, such as:
            </p>
            <ul>
              <li>React</li>
              <li>TypeScript/JavaScript</li>
              <li>Java</li>
              <li>PHP</li>
              <li>SQL (PostgreSQL mostly)</li>
            </ul>
          </article>
        </section>

        <hr />

        <section className={styles["body-section"]}>
          <header>
            <h2>My Skills and My Confidence in Them</h2>
          </header>
          <article>
            <SkillProgress lbl="HTML" value={70} id="html" />
            <SkillProgress lbl="JavaScript" value={70} id="js" />
            <SkillProgress lbl="CSS" value={60} id="css" />
            <SkillProgress lbl="PostgreSQL" value={50} id="pgsql" />
            <SkillProgress lbl="Java" value={45} id="java" />
            <SkillProgress lbl="PHP" value={45} id="php" />
            <SkillProgress lbl="Database Normalisation" value={33} id="db-norm" />
            <SkillProgress lbl="Git" value={30} id="git" />
            <SkillProgress lbl="GitHub Automation" value={20} id="github-auto" />
            <SkillProgress lbl="MySQL" value={5} id="mysql" />
          </article>
        </section>
      </article>

      <GoHomeBtn />

      <Footer />
    </main>
  );
}
