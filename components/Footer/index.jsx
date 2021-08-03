import styles from "../Footer/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Scroll to="top" smooth={true} className={styles.logo}>
            <Image
              src="/mulunch_logo.png"
              alt="mulunch logo"
              width={180}
              height={90}
            />
          </Scroll>
        </li>
        <li className={styles.sns_link}>
          <Link href="https://twitter.com/muramusubi/">
            <a>
              <IoLogoTwitter size={24} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/muramusubi/">
            <a>
              <IoLogoInstagram size={24} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/muramusubi/">
            <a>
              <IoLogoFacebook size={24} />
            </a>
          </Link>
        </li>

        <li className={styles.li}>
          <p className={styles.mulunch_font}>むらんち</p>
          <p>〒 162-0825 東京都新宿区神楽坂6丁目19</p>
          <p>TEL 03-6457-5597</p>
          <p>11:30-14:30 (LO 14:00)</p>
          <small>©︎ Muramusubi</small>
        </li>
      </ul>
    </footer>
  );
};
