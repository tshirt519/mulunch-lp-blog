import styles from "../Village/Village.module.css";
import Image from "next/image";
import { IoIosArrowDropdown } from "react-icons/io";

export const Village = () => {
  return (
    <section id="village" className={styles.section}>
      <div>
        <Image
          src="/vbg-2.png"
          alt="village section"
          width={1680}
          height={1200}
        />
      </div>
      <div className={styles.village}>
        <Image
          src="/uenomurabg1-3.png"
          alt="ueno village"
          width={1400}
          height={600}
        />
        <details>
          <summary>
            <IoIosArrowDropdown size={24} />
            READ MORE
          </summary>
          <p>
            上野村（うえのむら）は、群馬県の南西部（最南端）に位置する、多野郡に存在する村。
          </p>
          <p>
            群馬県で最も人口の少ない自治体かつ（平成27年6月1日現在）、
            関東地方の島嶼部（伊豆諸島・小笠原諸島）を除いた最も人口の少ない自治体である。
          </p>
        </details>
        <Image
          src="/oshikamurabg-2.png"
          alt="oshika village"
          width={1400}
          height={600}
        />
        <details>
          <summary>
            <IoIosArrowDropdown size={24} />
            READ MORE
          </summary>
          <p>
            南アルプスと伊那山地に挟まれた山間の土地。中央構造線が村内を南北（国道沿い）に通っており、
            天竜川の支流・小渋川が南アルプスから西流している。村の北端は分杭峠、南端は地蔵峠の難所である。
          </p>
          <p>
            地蔵峠から北流する青木川と、分杭峠から南流する鹿塩川が中央構造線の谷筋に沿って流れ、
            小渋川に流入している。
          </p>
        </details>
      </div>
      <div className={styles.transition}></div>
    </section>
  );
};
