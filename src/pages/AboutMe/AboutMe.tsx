import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Page from "../../comps/Page/Page";
import SkillMeter from "../../comps/SkillMeter/SkillMeter";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  // Define a function that finds my age
  const age = (birthDate: Date): number => {
    const today = new Date();

    // Get the approx. age
    let age = today.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has passed
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    // If the birthday hasn't passed
    if (!hasHadBirthdayThisYear) {
      // Subtract 1
      age--;
    }
    
    return age;
  }

  // Languages I'm good at
  const goodLangs = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "PostgreSQL"
  ].sort(); // Sort it alphabetically

  // Things I experimented with
  const experimentedWith = [
    "Bootstrap 4",
    "Bootstrap 5",
    "GnuCOBOL",
    "C++",
    "C#",
    "C",
    "Fortran 90",
    "Perl",
    "Java",
    "PHP"
  ].sort();

  const concepts = [
    "Responsive Web Design (RWD)",
    "Accessibility in web development",
    "Good programming practices",
    "Version control with Git"
  ].sort();

  return (
    <Page headerText="About Me">
      <section className={styles["body-section"]}>
        <header>
          <h2>Who am I?</h2>
        </header>
        <article>
          <p>
            I, Ethan Kletschke, am a(n) {age(new Date("2006-12-06"))}-year-old
            aspiring Web Developer with experience dating back to high school with
            both software and web applications and theory.<br />
            I'm mostly interested in web development, but am well-versed in
            a wide variety of concepts related to software applications,
            web pages, web applications, database design and development, and basic UI
            design.
          </p>

          <p>I am confident in using the following languages and frameworks:</p>
          <ul>
            {/* List the languages I'm good at */}
            {goodLangs.map((val, index) => {
              return <li key={index}>{val}</li>;
            })}
          </ul>

          <p>I have also previously experimented with the following to various degrees:</p>
          <ul>
            {experimentedWith.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>

          <p>Lastly, I am well-versed in the following concepts:</p>
          <ul>
            {concepts.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
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
          <SkillMeter lblText="Git" value={65} htmlID="git" />
          <SkillMeter lblText="React" value={65} htmlID="react" />
          <SkillMeter lblText="TypeScript" value={65} htmlID="ts" />
          <SkillMeter lblText="CSS" value={55} htmlID="css" />
          <SkillMeter lblText="Database Normalisation" value={55} htmlID="db-norm" />
          <SkillMeter lblText="PostgreSQL" value={45} htmlID="pgsql" />
          <SkillMeter lblText="GitHub Automation" value={20} htmlID="github-auto" />
        </article>
      </section>

      <GoHomeBtn />
    </Page>
  );
}
