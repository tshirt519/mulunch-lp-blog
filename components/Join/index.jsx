import styles from "../Join/Join.module.css";
import Image from "next/image";

export const Join = () => {
  return (
    <section id="join" className={styles.section}>
      <div className={styles.heading}>
        <div>
          <h2>JOIN</h2>
          <p>参加してみよう！</p>
        </div>
        <div>
          <Image
            src="/join-right-3.png"
            alt="join description"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className={styles.description}>
        <h3>「村」をむすぼう</h3>
        <p>
          <span className={styles.mulunch_font}>むらんち</span>
          では、一緒にむらをむすぶ仲間を募集しています。
        </p>
        <p>
          いろんな興味・関心を持ったメンバーの関わりのなかで活動がうまれています。
        </p>
        <p>少しでも興味がある方はお気軽にお問い合わせくださいね！</p>
      </div>

      <div className={styles.flow}>
        <Image
          src="/join-flow1.png"
          alt="join flow"
          width={1200}
          height={700}
        />
      </div>

      <form className={styles.form} action="mailto:muramusubi.lunch@gmail.com" method="POST">
        <div>
          <input type="text" name="shimei" placeholder="お名前" />
          <input type="email" name="email" placeholder="メールアドレス" />
        </div>
        <textarea
          name="contact"
          cols="167"
          rows="16"
          placeholder="お問い合わせ内容"
        ></textarea>
        <input type="submit" value="送信" />
      </form>

      <div className={styles.transition}></div>
    </section>
  );
};
