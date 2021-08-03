import styles from "../Top/Top.module.css";
import Image from "next/image";
import Link from "next/link";

export const Top = () => {
  return (
    <section className={styles.section}>
      <Image
        src="/TV-6.jpg"
        alt="top visual"
        width={1680}
        height={1074}
        objectPosition="center"
        objectFit="cover"
      ></Image>

      <div className={styles.div}>
        <Link href="#">
          <a>
            <p>SCROLL</p>
            <svg
              className={styles.svg}
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
            </svg>
          </a>
        </Link>
      </div>
    </section>
  );
};
