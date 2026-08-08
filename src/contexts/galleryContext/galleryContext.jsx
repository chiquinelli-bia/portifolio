import { createContext, useContext, useState } from "react";

import { projectsData } from "./projectsData";

const GalleryContext = createContext();
GalleryContext.displayName = "GalleryContext";

const useGalleryContext = () => {
  return useContext(GalleryContext);
};

function GalleryContextProvider({ children }) {
  const projects = projectsData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <GalleryContext.Provider
      value={{
        projects,
        currentIndex,
        setCurrentIndex,
        currentImage,
        setCurrentImage,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export { GalleryContextProvider, useGalleryContext };
