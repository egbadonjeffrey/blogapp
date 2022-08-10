import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

import ProfilePhoto from "../images/profile_pic.png";

import { MediumContext } from "../context/MediumContext";

import Logo from "../images/logo.png";
import Button from "./Button";

const Header = () => {
  const { auth } = useContext(MediumContext);
  const [handleAuth, setHandleAuth] = useState(auth);

  return (
    <div className={styles.navBar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <a className={styles.Link}>
            <Image src={Logo} alt="logo" />
          </a>
        </Link>
      </div>

      {/* Navigation Menu */}

      <div className={styles.navigationMenu}>
        <Link href="/about">
          <a>
            <Button id={"about"} value={"About"} isDisabled={false} />
          </a>
        </Link>
        {handleAuth ? (
          <>
            <Link href="#">
              <Button
                id={"write"}
                clickHandler={() => {
                  setHandleAuth(true);
                }}
                value={"Write"}
                isDisabled={false}
              />
            </Link>

            <Link href="">
              <Image
                className={styles.profilePhoto}
                src={ProfilePhoto}
                alt="Profile Photo"
                width={50}
                height={50}
              />
            </Link>
          </>
        ) : (
          <>
            <Link href="#">
              <Button id={"signin"} value={"Sign In"} isDisabled={false} />
            </Link>

            <Link href="#">
              <Button
                id={"signup"}
                value={"Sign Up"}
                isDisabled={false}
                clickHandler={() => {
                  setHandleAuth(true);
                }}
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  navBar: `
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
    text-xl
  `,
  navigationMenu: `
    flex 
    items-center 
    justify-end 
    gap-[2rem] 
    flex-end 
  `,
};

export default Header;
