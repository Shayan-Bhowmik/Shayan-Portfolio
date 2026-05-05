import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Publication from './components/Publication';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    const targetId = hash.replace('#', '');

    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      window.requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [hash]);

  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-primary">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Publication />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}