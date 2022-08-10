import Image from "next/image";
import Link from "next/link";

import Logo from "../images/logo.png";

const Header = () => {
  return (
    <div className={styles.navBar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src={Logo} alt="logo" />
      </div>

      {/* Navigation Menu */}
      <div className={styles.navigationMenu}>
        <Link>
          <a href="#">About</a>
        </Link>

        <Link>
          <button className={styles.button}>Login</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  navBar: "container mx-auto my-[1rem]",
  logo: "",
};

export default Header;
