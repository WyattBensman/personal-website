import { useEffect } from "react";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header";
import Knowledge from "../components/Knowledge/Knowledge";
import Portfolio from "../components/portfolio/Portfolio";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Education />
      <Knowledge />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}
