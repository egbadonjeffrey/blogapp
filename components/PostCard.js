import Image from "next/image";
import Link from "next/link";
import SinglePost from "../pages/post/[slug]";

const PostCard = ({ article }) => {
  return (
    // <Link href={`/post/${id}`}>
    <div className={styles.wrapper}>
      <div className={styles.postDetails}>
        <div className={styles.postThumbnail}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${post?.data?.authorImage}`}
            width={500}
            height={500}
            alt="post Thumbnail"
          />
        </div>
        <div className={styles.articleData}>
          {/* <div className={styles.postTitle}>{title}</div> */}
          <div className={styles.postAuthorNameAndDate}>
            {/* <p>{author} </p> */}
            <p> | </p>
            {/* <p> {date} </p> */}
            <p>(10 mins read)</p>
          </div>

          <div>{/* <p>{body}</p> */}</div>
        </div>
      </div>
    </div>
    // </Link>
  );
};

const styles = {
  wrapper: `
    container
    w-[70%]
    mx-auto
    my-[3rem]
  `,
  postDetails: `
  flex
  flex-row
  gap-[2rem]
  `,
  postThumbnail: `
    w-[50%]
  `,
  postTitle: ``,
  postAuthorNameAndDate: `
    flex
    flex-row
    gap-[.4rem]
  `,

  articleData: `
    flex
    flex-col
    gap-[1rem]
  `,
};

export default PostCard;
