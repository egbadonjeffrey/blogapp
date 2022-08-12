import { createContext, useEffect, useState } from "react";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../Firebase";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));

      setPost(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              title: doc.data().title,
              body: doc.data().body,
              author: doc.data().author,
              authorImage: doc.data().imageUrl,
              date: doc.data().date,
            },
          };
        })
      );
    };

    getPosts();
  }, []);

  console.log(post);

  return (
    <MediumContext.Provider
      value={{
        auth,
        post,
      }}
    >
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
