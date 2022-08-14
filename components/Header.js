import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";

import { AiOutlineMenu } from "react-icons/ai";

import Logo from "./Logo";
import Button from "./Button";
import NavMenu from "./NavMenu";
import PostModal from "./PostModal";

Modal.setAppElement("#__next");

const Header = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div>
        <Logo />
      </div>
      <div className={styles.navigationMenu}>
        <NavMenu />
      </div>
      <Link href={`/?menu=1`}>
        <div className={styles.menuButton}>[Menu]</div>
      </Link>

      <Modal
        className={styles.modalWrapper}
        isOpen={Boolean(router.query.menu)}
        onRequestClose={() => router.push("/")}
      >
        <PostModal />
      </Modal>
    </div>
  );
};

const styles = {
  navigationMenu: `
    hidden
    md:block
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

  menuButton: `
    block
    md:hidden
    text-[1.4rem]
    font-bold
    cursor-pointer
  `,

  modalWrapper: `
  flex
  absolute
  right-0
  justify-center
  bg-[#1c1c1c]
  text-white
  text-left
  text-[2rem]
  font-semibold
  w-[100%]
  h-[100vh]
  md:w-[50%]
  md:h-[50rem]
      
    `,
};

export default Header;
