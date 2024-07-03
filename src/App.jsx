import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Test from "./components/Test";

const App = () => {
  return <div>
    <section><Navbar/></section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Portfolio</section>
    <section>Contact</section>
   {/* <Test/> */}
  </div>;
};

export default App;
