import { Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing";
import SammyPage from "./routes/SammyPage";
import MartinPage from "./routes/MartinPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/sammy" element={<SammyPage />} />
      <Route path="/martin" element={<MartinPage />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}
