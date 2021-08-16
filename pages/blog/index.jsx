import Head from "next/head";
import styles from "/styles/Blog.module.css";
import { Footer } from "/components/Footer";
import { BlogHeader } from "/components/Header/BlogHeader";
import Image from "next/image";
import Link from "next/link";

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
        <section className={styles.section}>
          <article>
            <div className={styles.article_main}>
              <div className={styles.article_thumbnail}>
                <Image
                  src="https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg"
                  width={600}
                  height={600}
                  alt="topics image"
                />
              </div>

              <div className={styles.article_text}>
                <h3>スナックむらむすび、始まります</h3>
                <div className={styles.article_data}>
                  <Link href="/">
                    <a className={styles.article_category}>大鹿村</a>
                  </Link>
                  ／<p className={styles.article_timestamp}>20210816</p>
                </div>
                <div className={styles.article_links}>
                  <div className={styles.access_counter}>12345</div>
                  <Link href="/">
                    <a className={styles.article_sns_link}>T</a>
                  </Link>
                  <div>
                    <Link href="/">
                      <a className={styles.article_user_link}>
                        <p>むらむすびのスタッフ</p>
                        <Image
                          src="https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg"
                          width={30}
                          height={30}
                          alt="topics image"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
