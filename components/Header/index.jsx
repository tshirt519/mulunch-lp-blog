import styles from "../Header/index.module.css";
import Image from "next/image";
import Link from "next/link";

export const Header = ()  => {
  return (
      <header className={styles.header}>
        <h1>
          <Link href="/">
            <a className={styles.a}>
              <Image
                src="/favicon.ico"
                alt="mulunch logo"
                width={50}
                height={50}
              />
            </a>
          </Link>
        </h1>
        <nav>
          <ul className={styles.ul}>
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
                <a className={styles.a}>JOIN</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}
