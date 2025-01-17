import "./app.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section id="Porfolio">
        <Services />
      </section>
      <section>
        <Parallax />
      </section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
