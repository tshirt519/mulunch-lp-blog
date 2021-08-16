import Head from "next/head";
import styles from "/styles/Blog.module.css";
import { Footer } from "/components/Footer";
import { BlogHeader } from "/components/Header/BlogHeader";

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>むらんちブログ</title>
        <meta
          name="description"
          content="食や地方について楽しく学べるコミュニティ、「むらんち」のブログです。"
        />
        <link rel="icon" href="/mulunch_favi.ico" />
      </Head>

      <BlogHeader />
      <main className={styles.container}>
        <div className={styles.div}>test</div>
      </main>
      <Footer />
    </div>
  );
}
