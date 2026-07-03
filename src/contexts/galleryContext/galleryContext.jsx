import { createContext, useContext, useState } from "react";
<<<<<<< HEAD
import { projectsData } from "./projectsData";
=======
import projectsData from "./projectsData";
>>>>>>> db8e7bdd0dde5739161ba0d10c5e77801c0bda4b

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
