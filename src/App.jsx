import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckBox from "./components/CheckBox";
import GoTOTop from "./components/GoTOTop";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
></link>;

function App() {
  return (
    <>
      <div>
        <CheckBox />
        {/* <!---------------------> */}
        <Header />
        {/* <!-------------------------------> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>

        {/* <!----Go to Top Section------> */}
        <GoTOTop />

        {/* <!----------------> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
