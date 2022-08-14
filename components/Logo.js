import Image from "next/image";
import Link from "next/link";
import LogoImage from "../images/logo.png";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <a className={styles.Link}>
          <Image src={LogoImage} alt="logo" />
        </a>
      </Link>
    </div>
  );
};

const styles = {
  Link: `
    cursor-pointer
    text-[1.5rem]
    hover:text-[#ccc]
  `,
};

export default Logo;
