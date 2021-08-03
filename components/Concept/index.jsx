import styles from "../Concept/Concept.module.css";
import Image from "next/image";

export const Concept = () => {
  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <h2 className={styles.mulunch_font}>
          <p>初めまして、</p>
          <p>むらんちです！</p>
        </h2>

        <div className={styles.concept}>
          <p>私たちは、2018年に発足した若者中</p>
          <p>心のボランティア団体です。</p>
          <p>”食べること”と豊かな自然や暮らしが</p>
          <p>ある”地方のむら”が大好きで、私た</p>
          <p>ちで何か「むらを応援する」ことがで</p>
          <p>きないかと思い始まりました。</p>
        </div>
        <div className={styles.concept}>
          <p>むらと私たち、”人”がつながる。</p>
          <p>むらの”おいしい食”でつながる。</p>
          <p>”楽しいこと”でつながる。</p>
        </div>
        <Image
          className={styles.concept_logo}
          src="/conceptlogo.png"
          alt="concept logo"
          width={500}
          height={300}
        />
      </div>
      <div className={styles.div}>
        <Image
          src="/conceptright.png"
          alt="concept image"
          width={800}
          height={1000}
        />
      </div>
    </section>
  );
};
