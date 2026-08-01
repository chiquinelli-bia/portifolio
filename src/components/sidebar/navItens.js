import { IoHomeOutline } from "react-icons/io5";
import { IoMdImages } from "react-icons/io";
import { RiFilePaper2Line } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";
export const itensNav = [
  {
    id: "home",
    texto: "Início",
    rota: "#inicio",
    icon: IoHomeOutline,
  },
  {
    id: "portfolio",
    texto: "Portifolio",
    rota: "#portifolio",
    icon: IoMdImages,
    subItem: {
      id: "outras-obras",
      texto: "Outras Obras",
      rota: "/outras-obras",
    },
  },
  {
    id: "about",
    texto: "Quem Sou",
    rota: "#quem-sou",
    icon: RiFilePaper2Line,
    subItem: {
      id: "curriculo",
      texto: "Currículo",
      rota: "/curriculo",
    },
  },
  {
    id: "contact",
    texto: "Fale Comigo",
    rota: "#contato",
    icon: GiRotaryPhone,
  },
];
