import { createContext } from "react";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  return <MediumContext.Provider>{children}</MediumContext.Provider>;
};

export { MediumContext, MediumProvider };
