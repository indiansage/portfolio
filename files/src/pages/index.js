import React from "react";
import About from "../components/About";
import Analytics from "../components/Analytics";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Testimonials />
      <Portfolio />
      <Analytics />
      <Contact />
    </>
  );
}
