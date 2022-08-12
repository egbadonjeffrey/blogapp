import Image from "next/image";

import { FiLink } from "react-icons/fi";

import ProfilePhoto from "../images/profile_pic.png";
import Socials from "./Socials";

const AboutAuthor = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={"poppins"}>ABOUT THE AUTHOR</h2>
      <div className={styles.authorDetails}>
        <div>
          <Image
            src={ProfilePhoto}
            width={500}
            height={500}
            alt="Author Profile"
          />
        </div>

        <div className={styles.authorNameUsernameDescription + "poppins"}>
          <div>
            <h1 className={"poppins"}>Author Black</h1>
            <p className={`${styles.authorUsername} + poppins`}>@authurblack</p>
          </div>
          <p className={`poppins`}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque animi
            porro, veritatis laboriosam, dicta quas hic accusamus vitae vel
            earum amet harum fugit iure. Eos unde saepe labore qui incidunt.
            Quisquam nesciunt impedit quis at temporibus nostrum molestias ad
            repellat?{" "}
          </p>
          <div className={styles.linkAndSocials}>
            <div className={styles.linkIconAndText}>
              <FiLink /> <p>authorblack.com</p>
            </div>{" "}
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
      flex
      flex-col
      container
      m-auto
      gap-[1.5rem]
      poppins
  `,
  authorDetails: `
        flex
        flex-row
        gap-[2rem]
    `,

  authorNameUsernameDescription: `
      poppins
  `,

  authorUsername: `
    text-[#ccc]
  `,

  linkIconAndText: `
    flex
    flex-row
    items-center
    gap-[.5rem]
  `,

  linkAndSocials: `
    flex
    flex-row
    justify-between
    items-center
    mt-[1rem]
  `,
};

export default AboutAuthor;
