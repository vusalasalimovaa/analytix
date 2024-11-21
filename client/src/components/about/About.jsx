import "./about.scss";
import laptop from "../../assets/images/computer.png";
import { RxArrowRight } from "react-icons/rx";
import { fadeIn } from "../scrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about-us">
      <div className="abt-us">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          About <span>analytix</span>
        </motion.h1>
      </div>

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="about-page"
      >
        <div className="grid-items">
          <img src={laptop} alt="" />
        </div>
        <div className="grid-items">
          <div className="subtitle">
            <h3>
              Analytix is a modern company that offers a wide range of services
              to meet the needs of our clients. We aim to create unique value in
              the market by integrating various service branches within a single
              company. Our company is an environment where Data intersects with
              Vision.
            </h3>
          </div>

          <h4>Our services include:</h4>
          <p>
            1. <span>Digital Projects (AI Chatbot):</span> We execute digital
            projects based on modern technologies such as artificial
            intelligence, UI/UX design, travel planning applications, and
            chatbots.
          </p>
          <p>
            2. <span>Data Collection, Analytics, and Visualization:</span> By
            collecting, analyzing, and visualizing your data, we provide
            valuable insights aimed at the development of your business.
          </p>
          <p>
            3. <span>Database Construction:</span> We build modern databases to
            store and manage data effectively.
          </p>

          <div className="click">
            <Link to="Services">
              <span>For more</span>
              <RxArrowRight className="arrow" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
