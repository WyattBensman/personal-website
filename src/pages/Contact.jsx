import { useEffect } from "react";
import Contact from "../components/contact/Contact";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFBF5] py-8 h-screen">
      <Contact />;
    </div>
  );
}
