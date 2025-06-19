import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./components/main/Home";
import List from "./pages/List";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
