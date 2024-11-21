import { PiLineVerticalLight } from "react-icons/pi";
import "./navbar.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import scroll from "../../assets/images/scroll.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="hero">
      <div className={`hero-background ${scrollY > 0 ? "blur" : ""}`}></div>
      <div className="hero-content">
        <p>
          We aim to create unique value in the market by integrating various
          service branches within a single company. Our company is an
          environment where Data intersects with Vision.
        </p>
        <Link to="About" className="find-out find-out-hover ">
          Find out More
        </Link>
      </div>
      <div className="navbar">
        <div className="wrapper">
          <motion.a
            className="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            analytix
          </motion.a>
          <div className="contact-menu">
            <Link to="Contact" className="cont">
              Contact
            </Link>
            <PiLineVerticalLight
              className="vertical-line"
              style={{ fontSize: "40px" }}
            />
            <div className="button-wrapper">
              <div
                className="button"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                <div
                  className={`burger ${isActive ? "burgerActive" : ""}`}
                ></div>
              </div>
            </div>
            <AnimatePresence mode="wait">{isActive && <Nav closeMenu={() => setIsActive(false)} />}</AnimatePresence>
          </div>
        </div>
      </div>
      <motion.img
        className="scroll"
        src={scroll}
        alt=""
        variants={textVariants}
        animate="scrollButton"
      />
    </div>
  );
};

export default Navbar;
