import { Link } from "react-scroll";
import { slide } from "../../anim";
import "./links.scss";
import { motion } from "framer-motion";

const Links = ({closeMenu}) => {
  const navItems = ["About", "Services", "Portfolio", "Contact"];

  return (
    <motion.div
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="link"
    >
      {navItems.map((item, index) => (
        <motion.p
          className="sidebar-items"
          whileTap={{ scale: 0.95 }}
        >
          <Link
            key={item}
            to={`${item}`}
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
            onClick={closeMenu}
          >
            {item}
          </Link>
        </motion.p>
      ))}
    </motion.div>
  );
};

export default Links;
