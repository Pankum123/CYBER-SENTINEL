import React, { createContext, useContext, useState } from "react";

export const KeywordContext = createContext();

export const KeywordProvider = ({ children }) => {
  
  const [keyword, setKeyword] = useState("");

  return (
    <KeywordContext.Provider value={[keyword, setKeyword]}>
      {children}
    </KeywordContext.Provider>
  );
};

// Custom hook for easy usage in components
export const useKeyword = () => useContext(KeywordContext);
