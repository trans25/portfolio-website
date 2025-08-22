import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";        // ✅ no curly braces
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter basename="/portfolio-website">
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
