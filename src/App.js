import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import YesPage from "./pages/YesPage";
import MainPage from "./pages/MainPage";
import CongratulationPage from "./pages/CongratulationPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<LandingPage/>} />
         <Route path="/yes" element={<YesPage/>} />
         <Route path="/foods" element={<MainPage/>}/>
         <Route path="/congrats" element={<CongratulationPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
