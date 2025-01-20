import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

export default function App() {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Footer />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
}
