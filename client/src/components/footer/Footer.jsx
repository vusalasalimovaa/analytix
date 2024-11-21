import "./footer.scss";
import mainLogo from "../../assets/images/png 3.png";
import { PiLineVerticalLight } from "react-icons/pi";
import Contact from "../contact/Contact";
import { FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const options = {
    duration: 200,
    smooth: true,
  };

  const scrollToTop = () => {
    scroll.scrollToTop(options);
  };

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
    <div className="footer-main">
      <div className="footer">
        <div className="logo">
          <img src={mainLogo} alt="" />
          <PiLineVerticalLight className="footer-arrow" />
          <h1>Contact Us</h1>
        </div>
      </div>
      <Contact />
      <div className="social-medias">
        <div className="social-media">
          <a href="https://www.facebook.com/people/Analytix/61567015074807/">
            <FaFacebookF className="last-icon" />
          </a>
        </div>

        <div className="social-media">
          <a href="https://api.whatsapp.com/send/?phone=994503329969&text&type=phone_number&app_absent=0">
          <IoLogoWhatsapp className='last-icon'/>
          </a>
        </div>

        <div className="social-media">
          <a href="https://www.linkedin.com/company/analytixmind/">
            <FaLinkedinIn className="last-icon" />
          </a>
        </div>
      </div>

      <div className="scroll-top">
        <motion.div
          variants={textVariants}
          animate="scrollButton"
          onClick={scrollToTop}
          className="border-arrow"
        >
          <GoArrowUp className="top" />
        </motion.div>
        {/* <div className="txt">
          <p>Back to top</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
