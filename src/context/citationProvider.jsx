import { createContext, useState } from "react";

const CitationContext = createContext();

const CitationProvider = ({ children }) => {
  const [citations, setCitations] = useState([]);
  console.log(citations);
  return (
    <CitationContext.Provider value={{ setCitations, citations }}>
      {children}
    </CitationContext.Provider>
  );
};

export { CitationProvider };
export default CitationContext;
