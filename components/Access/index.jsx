import styles from "../Access/Access.module.css";
import Image from "next/image";

export const Access = () => {
  return (
    <section className={styles.section}>
      <div className={styles.access}>
        <div className={styles.access_left}>
          <h3>
            <svg
              width="60"
              height="60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-4 -3 30 30"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
            </svg>
            ACCESS
          </h3>
          <div>
            <p>〒162-0825</p>
            <p>東京都新宿区神楽坂6丁目19</p>
            <p>TEL 03-6457-5597</p>
            <p>11:30-14:30 (LO 14:00)</p>
          </div>
          <p>最寄駅</p>
          <div>
            <ul>
              <li>JR 飯田橋駅 西口 徒歩11分</li>
              <li>東京メトロ 各線 飯田橋駅 B3出口 徒歩10分</li>
              <li>都営大江戸線 飯田橋駅 B3出口 徒歩10分</li>
              <li>東京メトロ東西線 神楽坂駅 出口1 徒歩3分</li>
              <li>都営大江戸線 牛込神楽坂駅 A3出口 徒歩6分</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.access_image}>
          <Image
            src="/access-image.png"
            alt="access image"
            width={400}
            height={300}
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.93687091488!2d139.7345646156244!3d35.70317108018913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c5736aef4ab%3A0xf2e4e97838ffcb76!2z44KA44KJ44KA44GZ44Gz!5e0!3m2!1sja!2sjp!4v1615879801737!5m2!1sja!2sjp"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
