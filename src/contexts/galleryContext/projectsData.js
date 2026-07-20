import {
  aluraBooks01,
  AluraBooksCover,
  CodeConnect01,
  CodeConnect02,
  CodeConnectCover,
  fokus01,
  fokus02,
  fokusCover,
  memoteca01,
  memoteca02,
  memotecaCover,
} from "../../assets/projects/index.js";

export const projectsData = [
  {
    id: 1,
    title: "Fokus",
    slug: "fokus",

    description:
      "Cronômetro regressivo com feedback visual integrado a um gerenciador de tarefas com persistência local. Focado em interação, eventos e organização de dados.",

    images: [fokusCover, fokus01, fokus02],

    technologies: [],

    links: {
      repository: "https://github.com/chiquinelli-bia/fokus",
      demo: "https://fokus-delta-five.vercel.app/",
    },

    features: [
      "Adicionar, editar e remover tarefas",
      "Controle de tempo com feedback visual",
      "Dados salvos localmente",
    ],

    highlights: [
      "Controle de estado contextual integrado ao cronômetro e tarefas",
      "Integração de áudio para feedback e interação",
      "Formatação de tempo para exibição clara",
      "Manipulação do DOM com foco em dinamismo",
      "Uso de funções nativas e objetos de áudio",
      "Estrutura modular para organização e manutenção",
    ],
  },

  {
    id: 2,
    title: "Code Connect",
    slug: "codeconnect",

    description:
      "Interface de publicação com upload e pré-visualização de imagens, formulários para descrição, tags e controle de ações. Estrutura responsiva com navegação lateral, priorizando clareza, agilidade e controle do conteúdo.",

    images: [CodeConnectCover, CodeConnect01, CodeConnect02],

    technologies: [],

    links: {
      repository: "https://github.com/chiquinelli-bia/3802-CodeConnect",
      demo: "https://3802-code-connect.vercel.app/",
    },

    features: [
      "Upload de imagens com pré-visualização imediata",
      "Formulários para descrição e tags",
      "Ações de publicar e descartar conteúdo",
      "Layout responsivo com navegação lateral",
      "Interações assíncronas para maior fluidez",
    ],

    highlights: [
      "Fluxo de upload sem back-end com pré-visualização imediata",
      "Controle de processos simultâneos",
      "Tratamento de erros sem bloquear a interface",
      "Interações claras, estáveis e confiáveis",
    ],
  },

  {
    id: 3,
    title: "Memoteca",
    slug: "memoteca",

    description:
      "Organizador de pensamentos com operações CRUD, busca typeahead e validação de dados, projetado para oferecer uma experiência ágil, clara e consistente.",

    images: [memotecaCover, memoteca01, memoteca02],
    technologies: [],

    links: {
      repository: "https://github.com/chiquinelli-bia/3781-memoteca",
      demo: "https://3781-memoteca.vercel.app/",
    },

    features: [
      "Cadastro, edição, listagem e exclusão de registros",
      "Marcação de favoritos",
      "Busca com sugestões em tempo real",
      "Validação de dados com regex",
      "Registro automático de datas",
      "Integração com API para persistência de dados",
    ],

    highlights: [
      "Validação de dados com regex",
      "Funções reutilizáveis para padronização",
      "Prevenção de duplicatas",
      "Dados íntegros e organizados",
      "Fluxo limpo e consistente",
    ],
  },

  {
    id: 4,
    title: "Alura Books",
    slug: "alurabooks",

    description:
      "Página dinâmica de livros com filtros, ordenação e atualização em tempo real via API, projetada para uma navegação clara, acessível e confiável.",

    images: [AluraBooksCover, aluraBooks01],

    technologies: [],

    links: {
      repository: "https://github.com/chiquinelli-bia/alura-books",
      demo: "https://alura-books-eight-blue.vercel.app/",
    },

    features: [
      "Filtro por categoria",
      "Ordenação por preço",
      "Atualização em tempo real via API",
      "Interface responsiva e acessível",
      "Renderização dinâmica de dados no DOM",
    ],

    highlights: [
      "Conversão de página estática em interface interativa",
      "Filtros e ordenação de dados",
      "Integração com API",
      "Manipulação do DOM",
      "Uso de métodos de array",
      "Código estruturado e consistente",
    ],
  },
];
