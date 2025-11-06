import { Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe.tsx";
import ConsecSum from "./pages/ConsecSum/ConsecSum.tsx";
import DialogsDemo from "./pages/DialogsDemo/DialogsDemo.tsx";
import DiceRoll from "./pages/DiceRoll/DiceRoll.tsx";
import EmailValidate from "./pages/EmailValidate/EmailValidate.tsx";
import Home from "./pages/Home/Home.tsx";
import NoPage from "./pages/NoPage/NoPage.tsx";
import ObjSort from "./pages/ObjSort/ObjSort.tsx";
import SentSort from "./pages/SentSort/SentSort.tsx";
import StopwatchPage from "./pages/StopwatchPage/StopwatchPage.tsx";

export default function App() {
  return (
    <Routes>
      {/* Route Index */}
      <Route path="/" element={<Home />} />
      {/* About Me Page */}
      <Route path="/aboutMe" element={<AboutMe />} />
      {/* Sentence Sort */}
      <Route path="/sentenceSort" element={<SentSort />} />
      {/* Consecutive Summation */}
      <Route path="/consecutiveSum" element={<ConsecSum />} />
      {/* Sort Objects */}
      <Route path="/objSort" element={<ObjSort />} />
      {/* Email Validator */}
      <Route path="/email" element={<EmailValidate />} />
      {/* Dice Rolling */}
      <Route path="/dice" element={<DiceRoll />} />
      {/* Dialog Box Demo */}
      <Route path="/dialogs" element={<DialogsDemo />} />
      {/* Stopwatch page */}
      <Route path="/stopwatch" element={<StopwatchPage />} />
      {/* 404 Page */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}
