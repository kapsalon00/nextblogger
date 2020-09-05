import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const value = { isOpen, setisOpen };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
