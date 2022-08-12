import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";

import Button from "./Button";

import ProfilePhoto from "../images/profile_pic.png";

import { MediumContext } from "../context/MediumContext";
import PostModal from "./PostModal";

Modal.setAppElement("#__next");

const NavMenu = () => {
  const router = useRouter();
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

          <Link href={`/?menu=1`}>
            <Image
              className={styles.profilePhoto}
              src={ProfilePhoto}
              alt="Profile Photo"
              width={50}
              height={50}
            />
          </Link>

          <div>
            <Modal
              className={styles.modalWrapper}
              isOpen={Boolean(router.query.menu)}
              onRequestClose={() => router.push("/")}
            >
              <PostModal />
            </Modal>
          </div>
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
 w-[50%]
 h-[50rem]
      
    `,
};

export default NavMenu;
