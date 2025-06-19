import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./components/main/Home";
import List from "./pages/List";
import Series from "./components/public/Series";
import AnimationsPage from "./components/public/AnimationsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/series" element={<Series />} />
          <Route path="animation" element={<AnimationsPage />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
