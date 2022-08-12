import Image from "next/image";

const Posts = (id, title, body, authorImage, author, date) => {
  return (
    <div>
      <div className={styles.postDetails}>
        <div className={styles.postThumbnail}>
          <Image
            src={authorImage}
            width={200}
            height={200}
            alt="post Thumbanil"
          />
        </div>
      </div>
      <h1>Posts</h1>
      {/* <div className={styles.postDetails}>
        <div className={styles.postThumbnail}>
          <Image
            src={authorImage}
            width={200}
            height={200}
            alt="post Thumbnail"
          />
        </div>
        <div className={styles.postTitle}>{title}</div>
        <div className={styles.postAuthorNameAndDate}>
          <p>{author}|</p>
          <p>{date}</p>
          <p>(10 mins read)</p>
        </div>

        <div>
          <p>{body}</p>
        </div>
      </div> */}
    </div>
  );
};

const styles = {};

export default Posts;
