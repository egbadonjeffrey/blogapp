import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import AboutAuthor from "../../components/AboutAuthor";
import { MediumContext } from "../../context/MediumContext";

import PostThumbnail from "../../images/dj_kit.png";

const SinglePost = () => {
  const [article, setArticle] = useState([]);

  const { posts } = useContext(MediumContext);
  const router = useRouter();

  // useEffect(() => {
  //   if (post.length === 0) {
  //     return;
  //   }

  //   setArticle(post.find((singlePost) => singlePost.id === router.query.slug));
  // });

  // console.log(router.query.slug, "Slug id");

  // console.log(post.length);
  return (
    <div>
      <div className={styles.postDetails}>
        <div className={styles.postThumbnail}>
          <Image
            src={PostThumbnail}
            width={500}
            height={500}
            alt="post Thumbnail"
          />
        </div>
        <div className={styles.postTitle}>{/* <h1> {title} </h1> */}</div>
        <div className={styles.postAuthorNameAndDate}>
          {/* <p>{author}|</p> */}
          {/* <p> {date} </p> */}
          <p>(10 mins read)</p>
        </div>

        <div>{/* <p>{body}</p> */}</div>
      </div>
      {/* <AboutAuthor authorImage={authorImage} /> */}
    </div>
  );
};

const styles = {};

export default SinglePost;
