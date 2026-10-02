import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./COMPONENTS/home";
import Next from "./COMPONENTS/Next";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/next" element={<Next />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;