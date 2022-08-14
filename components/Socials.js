import Link from "next/link";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <Link href="">
        <a>
          <AiFillLinkedin className={styles.icon} />
        </a>
      </Link>

      <Link href="">
        <a>
          <AiFillInstagram className={styles.icon} />
        </a>
      </Link>

      <Link href="">
        <a>
          <ImFacebook2 className={styles.icon} />
        </a>
      </Link>
    </div>
  );
};

const styles = {
  socials: `
    flex
    flex-row
    gap-[1rem]
  `,
  icon: `
    w-[1.5rem]
    h-[1.5rem]
  `,
};

export default Socials;
