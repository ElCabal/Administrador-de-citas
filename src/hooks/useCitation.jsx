import { useContext } from "react";
import CitationContext from "../context/citationProvider";

const useCitation = () => {
  return useContext(CitationContext);
};

export default useCitation;
