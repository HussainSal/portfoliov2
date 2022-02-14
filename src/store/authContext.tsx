import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
  deviceSize: 0,
});

export const AppWrapper: React.FC<{ children: any }> = ({ children }) => {
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);

  useEffect(() => {
    const resizeW = () => changeDeviceSize(window.innerWidth);

    window.addEventListener("resize", resizeW); // Update the width on resize

    return () => window.removeEventListener("resize", resizeW);
  }, [deviceSize]);

  return (
    <AppContext.Provider value={{ deviceSize }}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
