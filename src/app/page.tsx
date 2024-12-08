import About from "./components/About";
import Contect from "./components/Contect";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";


export default function Home() {
  return (
    <div >
<Navbar />
<Hero />
<About />
<Project />
<Contect />
<Footer />
    </div>
  );
}
