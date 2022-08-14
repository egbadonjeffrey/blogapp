import { createContext, useEffect, useState } from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";
import { postcss } from "autoprefixer";
import SinglePost from "../pages/post/[slug]";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const [queryAuthorDetails, setQueryAuthorDetails] = useState([]);

  // GETTING USER DATA

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              name: doc.data().name,
              authorImage: doc.data().image,
            },
          };
        })
      );
    };

    getUsers();
  }, []);

  // GETTING POST DATA

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));

      setPost(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              author: doc.data().author,
              body: doc.data().body,
              date: doc.data().date,
              thumbnail: doc.data().imageUrl,
              title: doc.data().title,
            },
          };
        })
      );
    };

    getPosts();
  }, []);

  // GETTING AUTHOR DATA

  useEffect(() => {
    post.map((article) => setQueryAuthorDetails(article));
    console.log(queryAuthorDetails?.data?.author);

    const getAuthorData = async () => {
      const docRef = doc(db, "users", queryAuthorDetails?.data?.author);
      const docSnap = await getDoc(docRef);
      setAuthorData(docSnap.data());
    };
    getAuthorData();
  }, [users]);

  console.log(authorData);

  return (
    <MediumContext.Provider
      value={{
        auth,
        users,
        post,
        authorData,
      }}
    >
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
