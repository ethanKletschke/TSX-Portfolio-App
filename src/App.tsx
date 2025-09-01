import { Route, Routes } from "react-router-dom";
import ConsecSum from "./pages/ConsecSum/ConsecSum.tsx";
import EmailValidate from "./pages/EmailValidate/EmailValidate.tsx";
import Home from "./pages/Home/Home.tsx";
import NoPage from "./pages/NoPage/NoPage.tsx";
import ObjSort from "./pages/ObjSort/ObjSort.tsx";
import SentSort from "./pages/SentSort/SentSort.tsx";
import ValidZA_ID from "./pages/ValidZA_ID/ValidZA_ID.tsx";

export default function App() {
  return (
    <>
      <Routes>
        {/* Route Index */}
        <Route path="/" element={<Home />} />
        {/* Sentence Sort */}
        <Route path="/sentenceSort" element={<SentSort />} />
        {/* Consecutive Summation */}
        <Route path="/consecutiveSum" element={<ConsecSum />} />
        {/* Sort Objects */}
        <Route path="/objSort" element={<ObjSort />} />
        {/* Email Validator */}
        <Route path="/email" element={<EmailValidate />} />
        {/* South African ID Validator */}
        <Route path="/southAfricanID" element={<ValidZA_ID />} />
        {/* 404 Page */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
}
