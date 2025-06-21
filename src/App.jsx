import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import AnimationDetails from "./pages/AnimationDetails";
import SeriesDetails from "./pages/SeriesDetails";
import Page from "./pages/SeriesPage/Page";
import AnimationPage from "./pages/animationPage/Page";
import ActionPage from "./pages/actionPage/Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seriespage" element={<Page />} /> {/* صفحه مخصوص سریال ها */}
          <Route path="/details/:id" element={<SeriesDetails />} />  {/* صفحه جزییات */}
          <Route path="/animationPage" element={<AnimationPage />} /> {/* صفحه مخصوص انیمیشن ها */}
          <Route path="/animationDetails/:id" element={<AnimationDetails />} />  {/* صفحه جزییات */}
          <Route path="/actionPage" element={<ActionPage />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
