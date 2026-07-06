import { createContext, useContext, useState } from "react";

import { projectsData } from "./projectsData";

const GalleryContext = createContext();
GalleryContext.displayName = "GalleryContext";

const useGalleryContext = () => {
  return useContext(GalleryContext);
};

function GalleryContextProvider({ children }) {
  const [projects, setProjects] = useState(projectsData);

  return (
    <GalleryContext.Provider value={{ projects, setProjects }}>
      {children}
    </GalleryContext.Provider>
  );
}

export { GalleryContextProvider, useGalleryContext };
