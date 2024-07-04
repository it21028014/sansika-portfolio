import "./app.scss";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return <div>
    <section id="Homepage"><Navbar/></section>
    <section id="Services">Parallax</section>
    <section id="Porfolio">Services</section>
    <section >Portfolio</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
