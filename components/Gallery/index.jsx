import styles from "./Gallery.module.css";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

export const Gallery = ({ gallery }) => {
  const pictures = [
    {
      title1: "神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店",
      image1:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店_1.jpg",
      title2: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      image2:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
      title3: "スナックむらむすび、始まります",
      image3:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg",
    },
    {
      title1: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      image1:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
      title2: "神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店",
      image2:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店_1.jpg",
      title3: "スナックむらむすび、始まります",
      image3:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg",
    },
    {
      title1: "スナックむらむすび、始まります",
      image1:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg",
      title2: "神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店",
      image2:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/神楽坂「むらむすび」営業再開見通せず　東成瀬村アンテナ店_1.jpg",
      title3: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      image3:
        "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = pictures.length;
  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section id="gallery" className={styles.section}>
      <h3>Photo Gallery</h3>
      <div>
        <ul className={styles.ul}>
          <button className={styles.prev} onClick={prevSlide}>
            <IoIosArrowDropleft size={24} />
          </button>
          {pictures.map((picture, index) => (
            <li key={index}>
              {index === current && (
                <div className={styles.ul}>
                  <article>
                    <Image
                      src={picture.image1}
                      width={400}
                      height={400}
                      alt="pictures image"
                    />
                    <p>{picture.title1}</p>
                  </article>
                  <article>
                    <Image
                      src={picture.image2}
                      width={400}
                      height={400}
                      alt="pictures image"
                    />
                    <p>{picture.title2}</p>
                  </article>
                  <article>
                    <Image
                      src={picture.image3}
                      width={400}
                      height={400}
                      alt="pictures image"
                    />
                    <p>{picture.title3}</p>
                  </article>
                </div>
              )}
            </li>
          ))}
          <button className={styles.next} onClick={nextSlide}>
            <IoIosArrowDropright size={24} />
          </button>
        </ul>
      </div>
    </section>
  );
};
