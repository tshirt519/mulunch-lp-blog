import styles from "../Header/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { IoLogoTwitter, IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { ResponsiveHeader } from "./ResponsiveHeader";

export const HomeOverlay = () => {
  return (
    <section>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <h1 className={styles.logo}>
              <Scroll to="top" smooth={true} duration={1000} offset={0}>
                <a className={styles.a}>
                  <Image
                    src="/mulunch_logo.png"
                    alt="mulunch logo"
                    width={120}
                    height={60}
                  />
                </a>
              </Scroll>
            </h1>
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
              <Scroll to="gallery" smooth={true} duration={1000} offset={-600}>
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
        </nav>
      </header>

      <ul className={styles.sns_nav}>
        <li className={styles.sns_link}>
          <Link href="https://twitter.com/muramusubi/">
            <a>
              <IoLogoTwitter size={24} />
            </a>
          </Link>
        </li>
        <li className={styles.sns_link}>
          <Link href="https://www.instagram.com/muramusubi/">
            <a>
              <IoLogoInstagram size={24} />
            </a>
          </Link>
        </li>
        <li className={styles.sns_link}>
          <Link href="https://www.facebook.com/muramusubi/">
            <a>
              <IoLogoFacebook size={24} />
            </a>
          </Link>
        </li>
      </ul>

      <ResponsiveHeader/>
    </section>
  );
};
