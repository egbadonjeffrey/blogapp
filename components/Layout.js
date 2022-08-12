import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

const styles = {
  wrapper: `
        flex
        flex-col
        justify-center
        mx-auto
        gap-[1rem]
        w-full
        bottom-0
    `,
};

export default Layout;
