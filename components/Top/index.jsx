import styles from "../Top/Top.module.css";
import Image from "next/image";
import { Link as Scroll } from "react-scroll";

export const Top = () => {
  return (
    <section id="top" className={styles.section}>
      <div className={styles.div}>
        <Scroll to="concept" smooth={true} duration={1000} offset={-50}>
          <a>
            <p>SCROLL</p>
            <svg
              className={styles.svg}
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
            </svg>
          </a>
        </Scroll>
      </div>
    </section>
  );
};
