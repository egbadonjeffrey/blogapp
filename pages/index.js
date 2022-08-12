import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import stylesSpecial from "../styles/Home.module.css";

import HeroBanner from "../components/HeroBanner";
import { useState } from "react";
import Posts from "../components/Posts";
import authorImageOne from "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg";

const data = [
  {
    id: 1,
    title: "The guns were made by mistake",
    body: "Guns were made to kill animals not man",
    date: "August 27",
    authorImage:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg",

    author: authorImageOne,
  },
  {
    id: 2,
    title: "The guns were made by mistake",
    body: "Guns were made to kill animals not man",
    date: "August 27",
    authorImage:
      "https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds",
    author: "Egbadon Jeffrey",
  },
  {
    id: 3,
    title: "The guns were made by mistake",
    body: "Guns were made to kill animals not man",
    date: "August 27",
    authorImage:
      "https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds",
    author: "Egbadon Jeffrey",
  },
  {
    id: 4,
    title: "The guns were made by mistake",
    body: "Guns were made to kill animals not man",
    date: "August 27",
    authorImage:
      "https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds",
    author: "Egbadon Jeffrey",
  },
];

export default function Home(backgroundImage) {
  const [bottom, setBottom] = useState(false);
  return (
    <div>
      <HeroBanner
        backgroundImage={stylesSpecial.topBackground}
        alignArticle={stylesSpecial.alignLeft}
      />

      {data.map(({ post: id, title, body, author, authorImage, date }) => (
        <div key={id} className={styles.post}>
          <Posts
            title={title}
            body={body}
            author={author}
            authorImage
            date={date}
          />
        </div>
      ))}

      <HeroBanner
        backgroundImage={stylesSpecial.bottomBackground}
        alignArticle={stylesSpecial.alignRight}
      />
    </div>
  );
}

const styles = {};
