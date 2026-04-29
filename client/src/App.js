import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';



// Pages
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Reviews from './pages/Reviews';
import Experience from './pages/Experience';
import Companies from './pages/Companies';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-16">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App; 