import styles from "../Responsive/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
import { Overlay } from "./Overlay";

export const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const ShowOverlay = () => {
    setShowOverlay(true);
  }

  return (
    <>
      <header className={styles.responsive_header}>
        <h1 className={styles.logo}>
          <Link href="/">
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
          <button onClick={ShowOverlay}>
            <GoThreeBars size={40} className={styles.barmenu} />
          </button>
          <Overlay showFlag={showOverlay} setShowOverlay={setShowOverlay} />
        </nav>
      </header>

    </>
  );
};
