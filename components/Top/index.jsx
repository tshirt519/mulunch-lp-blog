import styles from "../Top/Top.module.css";
import Image from "next/image";

export const Top = () => {
  return (
    <section className={styles.section}>
      <Image
        src="/TV-6.jpg"
        alt="top visual"
        width={1680}
        height={1100}
        className={styles.Image}
      ></Image>
    </section>
  );
};
