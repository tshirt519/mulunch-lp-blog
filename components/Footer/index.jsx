import styles from "../Footer/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
      <footer className={styles.footer}>
        <ul className={styles.footer}>
          <li>
            <a className={styles.a}>
              <Image
                src="/favicon.ico"
                alt="mulunch logo"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li>
            <Link href="https://twiiter.com">
              <a>twitter</a>
            </Link>
            <Link href="https://instagram.com">
              <a>instagram</a>
            </Link>
            <Link href="https://facebook.com">
              <a>facebook</a>
            </Link>
          </li>
          <li>
            <p>むらんち</p>
            <small>©︎ Muramusubi</small>
          </li>
        </ul>
      </footer>
  );
}
