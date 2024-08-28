import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="h-screen max-w-7xl mx-auto pt-27">
        <About />
        <Introduction />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}
