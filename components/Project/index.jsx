import styles from "../Project/Project.module.css";
import Image from "next/image";
import { style } from "dom-helpers";

export const Project = () => {
  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <h2 className={styles.mulunch_font}>むらんちの活動</h2>
        <p>
          <span>都心から村へ、村から都心へ</span>
        </p>
      </div>
      <div className={styles.project}>
        <h3>村と私たちができることを楽しく！</h3>
        <p>
          活動の大きな柱として、応援したいむらを見つけ、都心で”食の発信”をしています。
        </p>
        <p>他にむらとつながりながら、田舎体験や観光などを楽しんでいます。</p>
      </div>

      <div className={styles.grid_upper}>
        <div className={styles.upper1}>
          <Image
            src="/actimg1-5.png"
            alt="project image"
            width={400}
            height={400}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={styles.upper2}>
          <Image
            src="/actimg2-2.png"
            alt="project image"
            width={400}
            height={400}
          />
        </div>
        <div className={styles.upper3}>
          <Image
            src="/actimg3-4.png"
            alt="project image"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className={styles.grid_lower}>
        <div className={styles.lower1}>
          <Image
            src="/actimg4-2.png"
            alt="project image"
            width={400}
            height={400}
          />
        </div>
        <div className={styles.lower2}>
          <Image
            src="/actimg5-2.png"
            alt="project image"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};
