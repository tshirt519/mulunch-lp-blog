import styles from "../Header/Header.module.css";
import Image from "next/image";
import Link from "next/link";

export const Header = ()  => {
  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <h1>
              <Link href="/">
                <a className={styles.a}>
                  <Image
                    src="/mulunch_logo.png"
                    alt="mulunch logo"
                    width={100}
                    height={50}
                  />
                </a>
              </Link>
            </h1>
            <li className={styles.li}>
              <Link href="#">
                <a className={styles.a}>CONCEPT</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a className={styles.a}>PROJECTS</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a className={styles.a}>TOPICS</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a className={styles.a}>VILLAGE</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a className={styles.a}>LUNCH</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a className={styles.a}>GARLLERY</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a className={styles.a}>ACCESS</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="#">
                <a className={styles.join}>JOIN</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}
