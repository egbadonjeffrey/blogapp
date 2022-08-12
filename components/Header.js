import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import Logo from "../images/logo.png";
import Button from "./Button";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">
          <a className={styles.Link}>
            <Image src={Logo} alt="logo" />
          </a>
        </Link>
      </div>
      <div className={styles.navigationMenu}>
        <NavMenu />
      </div>

      <div>
        <AiOutlineMenu className={styles.mobileMenu} />
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
    w-[4rem]
    h-[2rem]
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
