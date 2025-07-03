import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import AnimationDetails from "./pages/AnimationDetails";
import SeriesDetails from "./pages/SeriesDetails";
import Page from "./pages/SeriesPage/Page";
import AnimationPage from "./pages/animationPage/Page";
import ActionPage from "./pages/actionPage/Page";
import HororPage from "./pages/HororPage/HororPage";
import WatchListPage from "./pages/Watchlist/WatchListPage";
import ActionDetails from "./pages/ActionDetails";
import ContactUs from "./components/contact/Contact";
import ForeignPage from "./pages/Foreign/Main";
import Subscription from "./pages/subscription/Subscription";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="watchlist" element={<WatchListPage />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="foregin" element={<ForeignPage />} />
          <Route path="subs" element={<Subscription />} />

          <Route path="/seriespage" element={<Page />} /> {/* صفحه مخصوص سریال ها */}
          <Route path="/details/:id" element={<SeriesDetails />} />  {/* صفحه جزییات */}

          <Route path="/animationPage" element={<AnimationPage />} /> {/* صفحه مخصوص انیمیشن ها */}
          <Route path="/animationDetails/:id" element={<AnimationDetails />} />  {/* صفحه جزییات */}

          <Route path="/actionPage" element={<ActionPage />} /> {/* صفحه مخصوص اکشن */}
          <Route path="/actionDetails/:id" element={<ActionDetails />} /> {/* صفحه جزییات */}

          <Route path="Hororpage" element={<HororPage />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
