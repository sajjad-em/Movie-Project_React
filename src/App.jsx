import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./components/main/FirstPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <FirstPage/>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
