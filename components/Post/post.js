import Link from "next/link";
import styles from "/styles/Blog.module.css";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className={styles.div}>
      <Image alt="post" className={styles.blog_image} src={post.image} width={400} height={225}/>
        <div className={styles.post_container}>
          <p className={styles.post_title}>{post.title}</p>
        </div>
      </div>
    </Link>
  );
}
