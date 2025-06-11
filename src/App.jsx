import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
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
