import Head from "next/head";
import styles from "/styles/Blog.module.css";
import { Footer } from "/components/Footer";
import { BlogHeader } from "/components/Header/BlogHeader";
import Image from "next/image";
import Link from "next/link";
import Post from "/components/Post/post.js";
import { getAllPostsData } from "/lib/posts.js";

export default function Blog({ posts }) {
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

      <main className={styles.main}>
        <div className={styles.top_container}>
          <Image
            src="https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/blog_topimage2.JPG"
            width={1600}
            height={900}
            alt="top image"
            className={styles.blog_image}
          />
        </div>
      </main>

      <div className={styles.posts}>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>

      <Footer className={styles.footer_blog} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
    revalidate: 3,
  };
}
