import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navigator/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import { LoadingSpiner } from "./components/Base/Loading";
import BottomNav from "./components/BottomNavigation/BottomNav";
import ButtonSetting from "./components/ButtonSetting/ButtonSetting";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import FotoSubmenu from "./Pages/Album/Foto/FotoSubmenu";
import TemanSubMenu from "./Pages/Album/Teman/TemanSubMenu";
import VideoSubMenu from "./Pages/Album/Video/VideoSubMenu";
import Postings from "./Pages/Postingan/Postings";
import TeamInfo from "./Pages/Team/TeamInfo";
import UploadFoto from "./Pages/Upload/UploadFoto/UploadFoto";
import UploadVideo from "./Pages/Upload/UploadVideo/UploadVideo";

const Home = lazy(() => import("./Pages/Home/Home"));
const Watch = lazy(() => import("./Pages/Watch/Watch"));
const Memory = lazy(() => import("./Pages/Album/Memory"));
const Document = lazy(() => import("./Pages/Document/Document"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const UploadPage = lazy(() => import("./Pages/Upload/UploadPage"));
const TermsConditions = lazy(() => import("./Pages/TermsConditions"));

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <main className="mb-4 lg:mb-auto">
        <div className="mt-0 w-full">
          <Suspense fallback={<LoadingSpiner />}>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="watch" element={<Watch />} />
              <Route path="album" element={<Memory />}>
                <Route path="" element={<FotoSubmenu />} />
                <Route path="video" element={<VideoSubMenu />} />
                <Route path="teman" element={<TemanSubMenu />} />
              </Route>
              <Route path="upload" element={<UploadPage />}>
                <Route path="" element={<UploadFoto />} />
                <Route path="video" element={<UploadVideo />} />
              </Route>
              <Route path="question" element={<Document />} />
              <Route path="p/:id" element={<Postings />} />
              <Route path="team" element={<TeamInfo />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-conditions" element={<TermsConditions />} />
              <Route
                path="*"
                element={
                  <ErrorPage
                    ErrorCode={404}
                    message={"halaman tidak ditemukan"}
                    Redirect="/"
                    callBack={() => window.location.reload()}
                  />
                }
              />
            </Routes>
          </Suspense>
        </div>
      </main>
      <Footer />
      <ButtonSetting />
      <BottomNav />
      <div className="fixed top-0 left-0 -z-10 h-screen w-full bg-white/25 backdrop-blur-2xl dark:bg-gray-900/40"></div>
    </div>
  );
}

export default App;
