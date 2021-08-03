import styles from "../Top/Top.module.css";
import { Link as Scroll } from "react-scroll";
import { IoIosArrowDropdown } from "react-icons/io";

export const Top = () => {
  return (
    <section id="top" className={styles.section}>
      <div className={styles.div}>
        <Scroll to="concept" smooth={true} duration={1000} offset={-50}>
          <a>
            <p>SCROLL</p>
            <IoIosArrowDropdown size={20} /> 
          </a>
        </Scroll>
      </div>
    </section>
  );
};
