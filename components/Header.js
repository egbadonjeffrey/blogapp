import Image from "next/image";
import Link from "next/link";

import Logo from "../images/logo.png";
import Button from "./Button";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <a className={styles.Link}>
            <Image src={Logo} alt="logo" />
          </a>
        </Link>
      </div>
      <div className={styles.navigationMenu}>
        {/* Navigation Menu */}
        <NavMenu />
      </div>

      <div className={styles.mobileMenu}>
        <span className={styles.top}>top</span>
        <span className={styles.middle}>middle</span>
        <span className={styles.bottoms}>bottom</span>
      </div>
    </div>
  );
};

const styles = {
  navigationMenu: `
    hidden
    md:block
  `,

  mobileMenu: `
    block 
    md:hidden
  `,

  wrapper: `
    container 
    flex 
    items-center 
    justify-between 
    mx-auto 
    my-[1rem] 
    text-primary
  `,

  logo: ``,

  Link: `
    cursor-pointer
    text-[1.5rem]
    hover:text-[#ccc]
  `,
};

export default Header;
