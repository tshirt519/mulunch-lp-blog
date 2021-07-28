import styles from "../Project/Project.module.css";
import Image from "next/image";

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

      <div className={styles.grid}>
        <Image className={styles.upper1}
          src="/actimg1-5.png"
          alt="project image"
          width={100}
          height={100}
        />
        <Image className={styles.upper2}
          src="/actimg2-2.png"
          alt="project image"
          width={100}
          height={100}
        />
        <Image className={styles.upper3}
          src="/actimg3-4.png"
          alt="project image"
          width={100}
          height={100}
        />
        <Image className={styles.lower1}
          src="/actimg4-2.png"
          alt="project image"
          width={100}
          height={100}
        />
        <Image className={styles.lower2}
          src="/actimg5-2.png"
          alt="project image"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};
