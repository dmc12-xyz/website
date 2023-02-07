import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ProjectDetailsPage from "./Pages/ProjectDetailsPage/ProjectDetailPage";
import { GlobalStyle, AppWrapper } from "./Style";
import { Projects } from "./api/projects";
import { useEffect } from "react";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/devnode"
            element={<ProjectDetailsPage {...Projects[0]} />}
          />
          <Route
            path="/clipto"
            element={<ProjectDetailsPage {...Projects[1]} />}
          />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
