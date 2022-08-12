import stylesSpecial from "../styles/Home.module.css";

import HeroBanner from "../components/HeroBanner";
import { useContext, useState } from "react";
import PostCard from "../components/PostCard";
import { MediumContext } from "../context/MediumContext";

export default function Home() {
  const { post } = useContext(MediumContext);

  const [bottom, setBottom] = useState(false);

  // console.log(post);

  return (
    <div>
      <HeroBanner
        backgroundImage={stylesSpecial.topBackground}
        alignArticle={stylesSpecial.alignLeft}
      />
      <h1 className={styles.articlesHeader}> Articles </h1>

      {}

      <HeroBanner
        backgroundImage={stylesSpecial.bottomBackground}
        alignArticle={stylesSpecial.alignRight}
      />
    </div>
  );
}

const styles = {
  articlesHeader: `
    w-[30%]
    m-auto
    text-center
    text-[3rem]
    border-b-[3px]
    border-[#1c1c1c]
  `,
};
