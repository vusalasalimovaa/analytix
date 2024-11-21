import "./whyUs.scss";
import Slider from "react-slick";
import { fadeIn } from "../scrollReveal";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import expert from "../../../src/assets/icons/expert.png";
import time from "../../../src/assets/icons/time.png";
import classes from "../../../src/assets/icons/classes.png";
import training from "../../../src/assets/icons/trainingg.png";
import project from "../../assets/icons/project.png";
import support from "../../assets/icons/support.png";
import presentation from "../../assets/icons/presentationn.png";

const WhyUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    // speed: 7000
    autoplaySpeed: 3000,
    // cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="heading"
      >
        <h1>
          Why <span>analytix?</span>
        </h1>
      </motion.div>

      <div className="main-why">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="slider-container"
        >
          <Slider {...settings}>
            <div className="why-us-card">
              <div className="card">
                <div className="icon">
                  <img src={expert} alt="" />
                </div>
                <div className="text">
                  <h2>Professional experts with international experience</h2>
                </div>
              </div>
            </div>

            <div className="why-us-card">
              <div className="card">
                <div className="icon">
                  <img src={time} alt="" />
                </div>
                <div className="text">
                  <h2>Flexible timing</h2>
                </div>
              </div>
            </div>

            <div className="why-us-card">
              <div className="card">
                <div className="icon">
                  <img src={classes} alt="" />
                </div>
                <div className="text">
                  <h2>Offline, online, hybrid classes</h2>
                </div>
              </div>
            </div>

            <div className="why-us-card">
              <div className="card">
                <div className="icon">
                  <img src={training} alt="" />
                </div>
                <div className="text">
                  <h2>Possible trainings & Support at your office/online</h2>
                </div>
              </div>
            </div>

            <div className="why-us-card">
              <div className="card">
                <div className="icon">
                  <img src={project} alt="" />
                </div>
                <div className="text">
                  <h2>Empirical projects during the programs</h2>
                </div>
              </div>
            </div>

            <div className="why-us-card">
              <div className="card">
                <div className="icon">
                  <img src={support} alt="" />
                </div>
                <div className="text">
                  <h2>Support/Products/Materials provided by us</h2>
                </div>
              </div>
            </div>

            <div className="why-us-card">
              <div className="card">
                <div className="icon">
                  <img src={presentation} alt="" />
                </div>
                <div className="text">
                  <h2>
                    Detailed presentation about actual projects delivered by our
                    team members.
                  </h2>
                </div>
              </div>
            </div>
          </Slider>
        </motion.div>
      </div>
    </>
  );
};

export default WhyUs;
