import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@/styles/global.css";
import { LandingPage } from "./pages/landingPage";
import { MainLayout } from "./pages/layouts/mainLayout";
import { Projects } from "./pages/projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/projetos" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
