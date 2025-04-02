import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects key="projects-page" />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
