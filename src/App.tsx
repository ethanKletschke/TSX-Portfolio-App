import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sentenceSort" element={<h2>Sort Sentence</h2>} />
        <Route path="/consecutiveSum" element={<h2>Consecutive Summation</h2>} />
        <Route path="/objSort" element={<h2>Object Sort</h2>} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </>
  )
}
