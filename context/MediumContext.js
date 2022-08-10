import { createContext, useState } from "react";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  return (
    <MediumContext.Provider
      value={{
        auth,
      }}
    >
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
