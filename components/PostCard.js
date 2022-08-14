import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SinglePost from "../pages/post/[slug]";

const PostCard = ({ post }) => {
  // const { title, body } = post.data;

  // console.log(authorData);

  return (
    <>
      {post.map((article) => (
        <Link href={`/post/${article?.data?.id}`} key={article?.data?.id}>
          <div className={styles.wrapper}>
            <div className={styles.postDetails}>
              <div className={styles.postThumbnail}>
                <Image
                  src={`https://res.cloudinary.com/demo/image/fetch/${article?.data?.thumbnail}`}
                  width={500}
                  height={500}
                  alt="post Thumbnail"
                />
              </div>
              <div className={styles.articleData}>
                <div className={styles.postTitle}>{article?.data?.title}</div>
                <div className={styles.postAuthorNameAndDate}>
                  {/* {console.log(article.data)} */}
                  {/* <p>{article?.data?.author} </p> */}
                  <p> | </p>
                  {/* <p> {article?.data?.date} </p> */}
                  <p>10 mins read</p>
                </div>

                <div>{/* <p>{article?.data?.body}</p> */}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
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
