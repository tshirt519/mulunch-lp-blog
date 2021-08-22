import styles from "../Header/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { IoLogoTwitter, IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { ResponsiveHeader } from "./ResponsiveHeader";

export const BlogOverlay = () => {
  return (
    <section>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
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
            <li className={styles.li}>
              <Link href="/">
                <a className={styles.a}>投稿一覧</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <a className={styles.a}>むらむすび</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <a className={styles.a}>全国の村</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <a className={styles.a}>上野村</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <a className={styles.a}>大鹿村</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <a className={styles.a}>東成瀬村</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <a className={styles.a}>タグ一覧</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <a className={styles.join}>HOME</a>
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

      <ResponsiveHeader />
    </section>
  );
};
