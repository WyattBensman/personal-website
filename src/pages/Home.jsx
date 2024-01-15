import { useEffect } from "react";
import Contact from "../components/contact/Contact";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Header from "../components/Header";
import Knowledge from "../components/knowledge/Knowledge";
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
