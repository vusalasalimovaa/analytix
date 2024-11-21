import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./app.scss";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/ourServices/Services";
import Portfolio from "./components/portfolio/Portfolio";
import WhyUs from "./components/whyUs/WhyUs";
import PreLoader from "./components/preLoader/PreLoader";

const App = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  // const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x -10,
      y: mousePosition.y -10,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  return (
    <>
    {/* <PreLoader/> */}
      <section id="/">
        <Navbar />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
      <section>
        <WhyUs />
      </section>
      <section id="Contact">
        <Footer />
      </section>
      <motion.div className="cursor" variants={variants} animate='default'></motion.div>
    </>
  );
};

export default App;
