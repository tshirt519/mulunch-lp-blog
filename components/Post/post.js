import Link from "next/link";
import styles from "/styles/Blog.module.css";

export default function Post({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className={styles.div}>
        <img alt="post" className={styles.blog_image} src={post.image} />
        <div className={styles.post_container}>
          <p className={styles.post_title}>{post.title}</p>
        </div>
      </div>
    </Link>
  );
}
