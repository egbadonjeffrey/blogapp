import Link from "next/link";
import { useRouter } from "next/router";

const PostModal = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactDetail}>
        <div className={styles.contact}>
          <p>[Email]</p>
          <p>scarlettdigital@gmail.com</p>
        </div>
        <div className={styles.contact}>
          <p>[Phone]</p>
          <p>07016978414</p>
        </div>
      </div>
      <div className={styles.innerWrapper}>
        <Link href="/about">
          <a className={styles.innerWrapperLink}>About</a>
        </Link>
        <Link href="/signin">
          <a className={styles.innerWrapperLink}>Sign In</a>
        </Link>
        <Link href="/signup">
          <a className={styles.innerWrapperLink}>Sign Up</a>
        </Link>
        <Link href="/settings">
          <a className={styles.innerWrapperLink}>Settings</a>
        </Link>
        <Link href="/dashboard">
          <a className={styles.innerWrapperLink}>Dashboard</a>
        </Link>
      </div>

      <div className={styles.menu}>
        <h1>[MENU]</h1>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
    flex
    flex-col
    gap-[2rem]
    items-center
    justify-center
    w-full
  `,

  innerWrapperLink: `
    hover:text-[#ccc]
    poppins
  `,

  contactDetail: `
  absolute
  w-full
  top-0
  left-0 
  my-[2rem]
  ml-[2rem]
  `,

  contact: `
  poppins
  flex
  flex-row
  w-[40%]
  gap-[1rem]
  justify-between
  text-[1.3rem]
  tracking-wide
  `,

  innerWrapper: `
    flex
    flex-col
  `,
  menu: `
    absolute
    left-0
    bottom-0
    text-[4rem]

  `,
};

export default PostModal;
