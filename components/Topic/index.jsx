import styles from "../Topic/Topic.module.css";
import Image from "next/image";

export const Topic = () => {
  const topics = [
    {
      title: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      url: "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
    },
    {
      title: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      url: "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
    },
    {
      title: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      url: "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
    },
    {
      title: "地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。",
      url: "https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/地域と人を繋いでいく。学生が仕掛ける「むらんち」が描く未来。_1.jpg",
    },
  ];

  return (
    <section className={styles.section}>
      <p>最新のお知らせ</p>
      <h3>TOPICS</h3>
      <div>
        <ul className={styles.ul}>
          <button>＜</button>
          {topics.map((topic, i) => (
            <li key={i}>
              <Image
                src={topic.url}
                width={300}
                height={300}
                alt="topics image"
              />
              <p>{topic.title}</p>
            </li>
          ))}
          <button>＞</button>
        </ul>
      </div>
    </section>
  );
};
