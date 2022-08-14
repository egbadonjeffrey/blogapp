import AboutAuthor from "../components/AboutAuthor";
import HeroBanner from "../components/HeroBanner";
import Logo from "../components/Logo";
import stylesSpecial from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.aboutBodybackground}>
        <p className={styles.aboutCompany}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, rem
          natus! Aut, tempora unde quos rerum dolorem labore ducimus eos quidem
          aliquid, accusamus velit provident. Pariatur ipsam incidunt voluptatem
          dignissimos?
        </p>

        <div className={styles.aboutWrapper}>
          <AboutAuthor />
        </div>

        <HeroBanner
          backgroundImage={stylesSpecial.aboutBackground}
          alignArticle={stylesSpecial.alignRight}
        />

        <h1 className={styles.bottomDescription}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          ipsam!{" "}
        </h1>
        <p></p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `
    container
    mx-auto
    h-[100vh]
  `,

  aboutCompany: `
    mx-auto
    w-[50%]
    text-center
    mb-[2rem]
  `,

  logo: `
    w-[20%]
    mx-auto
  `,

  aboutWrapper: `
    mb-[2rem]
  `,

  aboutBodybackground: `
    bg-black
    h-[30]
  `,
};

export default About;
