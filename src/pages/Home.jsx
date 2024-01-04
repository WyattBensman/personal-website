import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header";
import Knowledge from "../components/Knowledge/Knowledge";
import Portfolio from "../components/portfolio/Portfolio";

export default function Home() {
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
