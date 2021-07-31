import styles from "../Topic/Topic.module.css";
import Image from "next/image";
import { useState } from "react";

export const Topic = ({ topic }) => {
  const topics = [
    {
      title1: "スナックむらむすび、始まります",
      image1:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg",
      title2: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      image2:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
      title3: "神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店",
      image3:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店_1.jpg",
      title4: "麦ストローで村おこし　大鹿の公民館が商品化、販売",
      image4:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/麦ストローで村おこし　大鹿の公民館が商品化、販売_1.jpg",
    },
    {
      title1: "麦ストローで村おこし　大鹿の公民館が商品化、販売",
      image1:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/麦ストローで村おこし　大鹿の公民館が商品化、販売_1.jpg",
      title2: "神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店",
      image2:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店_1.jpg",
      title3: "スナックむらむすび、始まります",
      image3:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg",
      title4: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      image4:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
    },
    {
      title1: "神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店",
      image1:
      "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店_1.jpg",
      title2: "麦ストローで村おこし　大鹿の公民館が商品化、販売",
      image2:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/麦ストローで村おこし　大鹿の公民館が商品化、販売_1.jpg",
      title3: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      image3:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
      title4: "スナックむらむすび、始まります",
      image4:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = topics.length;
  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className={styles.section}>
      <p>最新のお知らせ</p>
      <h3>TOPICS</h3>
      <div>
        <ul className={styles.ul}>
          <button className={styles.next} onClick={prevSlide}>
            ＜
          </button>
          {topics.map((topic, index) => (
            <li key={index}>
              {index === current && (
                <div className={styles.ul}>
                  <article>
                    <Image
                      src={topic.image1}
                      width={300}
                      height={300}
                      alt="topics image"
                    />
                    <p>{topic.title1}</p>
                  </article>
                  <article>
                    <Image
                      src={topic.image2}
                      width={300}
                      height={300}
                      alt="topics image"
                    />
                    <p>{topic.title2}</p>
                  </article>
                  <article>
                    <Image
                      src={topic.image3}
                      width={300}
                      height={300}
                      alt="topics image"
                    />
                    <p>{topic.title3}</p>
                  </article>
                  <article>
                    <Image
                      src={topic.image4}
                      width={300}
                      height={300}
                      alt="topics image"
                    />
                    <p>{topic.title4}</p>
                  </article>
                </div>
              )}
            </li>
          ))}
          <button className={styles.next} onClick={nextSlide}>
            ＞
          </button>
        </ul>
      </div>
    </section>
  );
};
