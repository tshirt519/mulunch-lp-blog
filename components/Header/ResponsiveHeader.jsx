import styles from "../Header/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { GoThreeBars } from "react-icons/go";
import HomeOverlay from "/components/Header/HomeOverlay";

export const ResponsiveHeader = () => {
  const setOverLay = () => {
    return <HomeOverlay />;
  };

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
      <div>
        <Link href="/">
          <a onClick={setOverLay}>
            <GoThreeBars size={40} className={styles.barmenu} />
          </a>
        </Link>
      </div>
    </header>
  );
};
