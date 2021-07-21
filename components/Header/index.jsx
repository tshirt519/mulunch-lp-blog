import styles from "../Header/Header.module.css";
import Image from "next/image";
import Link from "next/link";

export const Header = ()  => {
  return (
      <header className={styles.header}>
        <h1>
          <Link href="/">
            <a>
              <Image
                src="/favicon.ico"
                alt="mulunch logo"
                width="50px"
                height="50px"
              />
            </a>
          </Link>
        </h1>
        <nav>
          <ul className={styles.header}>
            <li>
              <Link href="#">
                <a>CONCEPT</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>PROJECTS</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>TOPICS</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>VILLAGE</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>LUNCH</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>GARLLERY</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>ACCESS</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>JOIN</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}
