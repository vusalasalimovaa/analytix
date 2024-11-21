import "./portfolio.scss";
import turbo from "../../assets/images/turbo.png";
import adidas from "../../assets/images/adidas.png";
import banking from "../../assets/images/banking.png";
import amazon from "../../assets/images/amazon.png";
import { motion } from "framer-motion";
import { fadeIn } from "../scrollReveal";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="heading"
        >
          <h1>
            Our <span>Portfolio</span>
          </h1>
        </motion.div>
        <motion.div
          className="port-grid"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="items">
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiMzZkYjgxY2UtNWE4Zi00NWRhLTk3YzYtNjAwOThhNjFhMzc3IiwidCI6ImEyYzYwMDliLWExNWQtNGMzMC05YzQzLWNiMTkxNjZjNGIwOCIsImMiOjl9 "
              target="_blank"
            >
              <img src={turbo} alt="" />
            </a>
          </div>

          <div className="items">
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiMjJiZmRiODYtMDE1ZC00MjkzLTlkOWYtYzlkMmJhNDAzODViIiwidCI6ImEyYzYwMDliLWExNWQtNGMzMC05YzQzLWNiMTkxNjZjNGIwOCIsImMiOjl9"
              target="_blank"
            >
              <img src={adidas} alt="" />
            </a>
          </div>

          <div className="items">
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiZDc1YjJhMzktZDkzZC00MjJlLWIwNjItMjU1OWE2ZDkxZmRmIiwidCI6ImEyYzYwMDliLWExNWQtNGMzMC05YzQzLWNiMTkxNjZjNGIwOCIsImMiOjl9"
              target="_blank"
            >
              <img src={banking} alt="" />
            </a>
          </div>

          <div className="items">
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiM2IyNjcwMWEtNzU5Yi00M2M4LWFjYjQtOWIyMmQwNGEyNmU4IiwidCI6ImEyYzYwMDliLWExNWQtNGMzMC05YzQzLWNiMTkxNjZjNGIwOCIsImMiOjl9"
              target="_blank"
            >
              <img src={amazon} alt="" />
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
