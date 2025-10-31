import Footer from "../../comps/Footer/Footer";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";
import SkillMeter from "../../comps/SkillMeter/SkillMeter";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  const age = (birthDate: Date): number => {
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age;
  }

  return (
    <main>
      <Header>
        About Me
      </Header>

      <article id="main-body">
        <section className={styles["body-section"]}>
          <header>
            <h2>Who am I?</h2>
          </header>
          <article>
            <p>
              I, Ethan Kletschke, am a(n)&nbsp;
              {age(new Date("2006-12-06"))}-year-old aspiring Web Developer 
              with experience dating back to high school with both software 
              and web apps. I'm mostly interested in web development, but am well-versed in 
              a wide variety of programming languages related to software and web apps, 
              particularly:
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
            <SkillMeter lblText="HTML" value={80} htmlID="html" />
            <SkillMeter lblText="JavaScript" value={70} htmlID="js" />
            <SkillMeter lblText="TypeScript" value={65} htmlID="ts" />
            <SkillMeter lblText="CSS" value={60} htmlID="css" />
            <SkillMeter lblText="React" value={55} htmlID="react" />
            <SkillMeter lblText="PostgreSQL" value={50} htmlID="pgsql" />
            <SkillMeter lblText="Java" value={45} htmlID="java" />
            <SkillMeter lblText="PHP" value={45} htmlID="php" />
            <SkillMeter lblText="Database Normalisation" value={33} htmlID="db-norm" />
            <SkillMeter lblText="Git" value={30} htmlID="git" />
            <SkillMeter lblText="GitHub Automation" value={20} htmlID="github-auto" />
            <SkillMeter lblText="MySQL" value={5} htmlID="mysql" />
          </article>
        </section>
      </article>

      <GoHomeBtn />

      <Footer />
    </main>
  );
}
