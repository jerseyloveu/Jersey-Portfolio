import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EducationExperiences from './pages/EducationExperiences';
import Skills from './pages/Skills';
import ProjectsCertifications from './pages/ProjectsCertifications';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/educexperience" element={<EducationExperiences />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projectcertification" element={<ProjectsCertifications />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;