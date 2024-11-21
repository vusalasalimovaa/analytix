import Links from "./links/Links";
import "./nav.scss";
import { motion } from "framer-motion";
import { menuSlide } from "../anim";
import Curve from "./curve/Curve";
import blackLogo from "../../assets/images/png 3.png";
import { slide } from "../anim.js";
import { Link } from "react-scroll";

const Nav = ({closeMenu}) => {
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="menu"
    >
      <div className="body">
        <div className="nav">
          <div className="main-section">
            <Link to="/">
              <motion.img
                src={blackLogo}
                alt=""
                variants={slide}
                animate="enter"
                exit="exit"
                initial="initial"
              />
            </Link>
          </div>
          <Links closeMenu={closeMenu} />
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
