import React from "react";
import styles from "../Responsive/Header.module.css";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { GrClose } from "react-icons/gr";
import Image from "next/image";

export const Overlay = (props) => {
  const closeOverlay = () => {
    props.setShowOverlay(false);
    console.log("test2");
  };
  return (
    <div>
      {props.showFlag ? (
        <div className={styles.overlay} onClick={closeOverlay}>
          <nav>
            <h1 className={styles.logo}>
              <Link href="/blog">
                <a className={styles.a}>
                  <Image
                    src="/mulunch_logo.png"
                    alt="mulunch logo"
                    width={120}
                    height={60}
                  />
                </a>
              </Link>
            </h1>
            <ul>
              <li className={styles.li}>
                <Scroll to="concept" smooth={true} duration={1000} offset={-50}>
                  <a className={styles.a}>CONCEPT</a>
                </Scroll>
              </li>
              <li className={styles.li}>
                <Scroll to="project" smooth={true} duration={1000} offset={50}>
                  <a className={styles.a}>PROJECTS</a>
                </Scroll>
              </li>
              <li className={styles.li}>
                <Scroll to="topic" smooth={true} duration={1000} offset={0}>
                  <a className={styles.a}>TOPICS</a>
                </Scroll>
              </li>
              <li className={styles.li}>
                <Scroll to="village" smooth={true} duration={1000} offset={120}>
                  <a className={styles.a}>VILLAGE</a>
                </Scroll>
              </li>
              <li className={styles.li}>
                <Scroll to="lunch" smooth={true} duration={1000} offset={0}>
                  <a className={styles.a}>LUNCH</a>
                </Scroll>
              </li>
              <li className={styles.li}>
                <Scroll
                  to="gallery"
                  smooth={true}
                  duration={1000}
                  offset={-600}
                >
                  <a className={styles.a}>GARLLERY</a>
                </Scroll>
              </li>
              <li className={styles.li}>
                <Scroll to="join" smooth={true} duration={1000} offset={-50}>
                  <a className={styles.a}>JOIN</a>
                </Scroll>
              </li>
              <li className={styles.li}>
                <Link href="/blog">
                  <a className={styles.join}>BLOG</a>
                </Link>
              </li>
            </ul>
            {/* <button className={styles.closeButton} onClick={closeOverlay}>
              <GrClose size={50} />
            </button> */}
          </nav>
        </div>
      ) : null}
      {console.log("okay")}
    </div>
  );
};
