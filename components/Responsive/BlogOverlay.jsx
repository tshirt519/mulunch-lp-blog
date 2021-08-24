import React from "react";
import styles from "../Responsive/Header.module.css";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import Image from "next/image";

export const BlogOverlay = (props) => {
  const closeOverlay = () => {
    props.setShowOverlay(false);
    console.log("test2");
  };
  return (
    <div>
      {props.showFlag ? (
        <div className={styles.overlay} onClick={closeOverlay}>
          <nav>
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
            <ul>
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
            <button className={styles.closeButton} onClick={closeOverlay}>
              <GrClose size={50} />
            </button>
          </nav>
        </div>
      ) : null}
      {console.log("okay")}
    </div>
  );
};
