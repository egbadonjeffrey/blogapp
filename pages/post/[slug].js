import Image from "next/image";
import AboutAuthor from "../../components/AboutAuthor";

import PostThumbnail from "../../images/dj_kit.png";

const Post = () => {
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
        <div className={styles.postTitle}>
          The {`World's`} Most Dangerous Technology Ever Made
        </div>
        <div className={styles.postAuthorNameAndDate}>
          <p>Ralph Hawkins |</p>
          <p>May 7, 2019</p>
          <p>(10 mins read)</p>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            necessitatibus fuga mollitia, molestiae neque, doloremque dolore
            suscipit reprehenderit consectetur temporibus perspiciatis. Quo
            dolore dolorem neque accusamus atque consectetur quibusdam, laborum
            alias magni voluptates quia fugit. Quam praesentium ut saepe quo
            dolores dolore temporibus laudantium impedit. Rerum quidem nobis
            illo deleniti.
          </p>
        </div>
      </div>
      <AboutAuthor />
    </div>
  );
};

export default Post;
