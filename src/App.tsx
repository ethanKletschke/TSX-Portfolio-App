import { Route, Routes } from "react-router-dom";
import ConsecSum from "./pages/ConsecSum/ConsecSum.tsx";
import EmailValidate from "./pages/EmailValidate/EmailValidate.tsx";
import Home from "./pages/Home/Home.tsx";
import ObjSort from "./pages/ObjSort/ObjSort.tsx";
import SentSort from "./pages/SentSort/SentSort.tsx";
import ValidZA_ID from "./pages/ValidZA_ID/ValidZA_ID.tsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sentenceSort" element={<SentSort />} />
        <Route path="/consecutiveSum" element={<ConsecSum />} />
        <Route path="/objSort" element={<ObjSort />} />
        <Route path="/email" element={<EmailValidate />} />
        <Route path="/southAfricanID" element={<ValidZA_ID />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  )
}
