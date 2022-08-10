import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

import Button from "./Button";

import ProfilePhoto from "../images/profile_pic.png";

import { MediumContext } from "../context/MediumContext";

const NavMenu = () => {
  const { auth } = useContext(MediumContext);
  const [handleAuth, setHandleAuth] = useState(auth);
  return (
    <div className={styles.wrapper}>
      {/* Navigation Menu */}
      <Link href="/about">
        <a>
          <Button id={"about"} value={"About"} isDisabled={false} />
        </a>
      </Link>
      {handleAuth ? (
        <>
          <Link href="/createPost">
            <a>
              <Button
                id={"write"}
                clickHandler={() => {
                  setHandleAuth(true);
                }}
                value={"Write"}
                isDisabled={false}
              />
            </a>
          </Link>

          <Button
            id={"signout"}
            value={"Sign Out"}
            isDisabled={false}
            clickHandler={() => {
              setHandleAuth(false);
            }}
          />

          <Image
            className={styles.profilePhoto}
            src={ProfilePhoto}
            alt="Profile Photo"
            width={50}
            height={50}
          />
        </>
      ) : (
        <>
          <Link href="/signin">
            <a>
              <Button id={"signin"} value={"Sign In"} isDisabled={false} />
            </a>
          </Link>

          <Link href="/signup">
            <a className={styles.Link}>
              <Button id={"signup"} value={"Sign Up"} isDisabled={false} />
            </a>
          </Link>

          <Link href="#">
            <a>
              <Button
                id={"auth"}
                value={"Auth"}
                isDisabled={false}
                clickHandler={() => {
                  setHandleAuth(true);
                }}
              />
            </a>
          </Link>
        </>
      )}
    </div>
  );
};

const styles = {
  wrapper: `
  flex 
  flex-row
  items-center 
  gap-[2rem] 
    `,
};

export default NavMenu;
