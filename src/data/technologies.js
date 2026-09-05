import {
  Html,
  Css,
  JavaScript,
  React,
  Redux,
  Vite,
  Axios,
} from "@/assets/technologies";

// Congelamos o array e cada objeto individualmente para garantir imutabilidade
export const technologies = Object.freeze([
  Object.freeze({
    id: 1,
    name: "HTML",
    icon: Html,
    percentage: 85,
    category: "Front-end",
  }),
  Object.freeze({
    id: 2,
    name: "CSS",
    icon: Css,
    percentage: 75,
    category: "Front-end",
  }),
  Object.freeze({
    id: 3,
    name: "JavaScript",
    icon: JavaScript,
    percentage: 70,
    category: "Front-end",
  }),
  Object.freeze({
    id: 4,
    name: "React",
    icon: React,
    percentage: 75,
    category: "Front-end",
  }),
  Object.freeze({
    id: 5,
    name: "Redux",
    icon: Redux,
    percentage: 58,
    category: "Front-end",
  }),
  Object.freeze({
    id: 6,
    name: "Axios",
    icon: Axios,
    percentage: 70,
    category: "Biblioteca",
  }),
  Object.freeze({
    id: 7,
    name: "Vite",
    icon: Vite,
    percentage: 62,
    category: "Ferramenta",
  }),
]);
