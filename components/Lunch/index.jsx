import styles from "../Lunch/Lunch.module.css";
import Image from "next/image";

export const Lunch = () => {
  return (
    <section id="lunch" className={styles.section}>
      <div>
        <Image
          src="/lunchbg-4.png"
          alt="lunch background"
          width={1680}
          height={1000}
        />
      </div>
      <div>
        <Image
          src="/lunchimg1-2.png"
          alt="lunch background"
          width={1400}
          height={800}
        />
      </div>
      <div>
      <Image
          src="/lunchimg2.png"
          alt="lunch background"
          width={1400}
          height={800}
        />
      </div>
      <div>
      <Image
          src="/lunchimg3.png"
          alt="lunch background"
          width={1300}
          height={650}
        />
      </div>
    </section>
  );
};
