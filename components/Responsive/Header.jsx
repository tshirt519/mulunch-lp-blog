import styles from "../Responsive/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { GoThreeBars } from "react-icons/go";

export const Header = () => {
  const setOverlay = () => {
    console.log("クリックされました");
  }

  return (
    <header className={styles.responsive_header}>
      <h1 className={styles.logo}>
        <Link href="/blog">
          <a className={styles.a}>
            <Image
              src="/mulunch_logo.png"
              alt="mulunch logo"
              width={80}
              height={40}
            />
          </a>
        </Link>
      </h1>
      <nav>
        <button onClick={() => {setOverlay()}}>
          <GoThreeBars size={40} className={styles.barmenu} />
        </button>
      </nav>
    </header>
  );
};
