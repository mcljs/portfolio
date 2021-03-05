import { IProject } from "../types/types"

export const projects: IProject[] = [
  {
    id: 0,
    name: "Movimiento por la Paz y la Vida",
    description:
      "Institutional progressive web application, semi static with dynamic routes.",
    image_path: "/images/mpv.png",
    deployed_url: "https://movimientoporlapazylavida.netlify.app/",
    github_url: "https://github.com/mcljs/mpv-gatsby/",
    category: ["gatsby"],
    key_techs: ["React", "Gatsby" , "Chart.js", "Styled-Components"],
  },
  {
    id: 1,
    name: "Trayecto IV UNEXCA - UNIDAD DE AUTISMO",
    //TODO add data
    image_path: "/images/trayectoiv.png",
    deployed_url: "https://ee-proyectoiv.now.sh/",
    github_url: "https://github.com/mcljs/ee-proyectoiv",
    category: ["hugo"],
    description:
      "University work website on Autism.",
    key_techs: ["Hugo", "Go"],
  },
 {
    id: 2,
    name: "Lading Page LHC-Tecnology",
    image_path: "/images/website.png",
    deployed_url: "https://lhc-tecnology.netlify.app/",
    github_url: "https://github.com/mcljs/lealhost",
    category: ["react"],
    description:
      "Development and technology agency landing page.",
    key_techs: ["React", "Styled-Components"],
  },
  {
    id: 3,
    name: "Ecommerce BurgerMaik",
    description:
      "Small fast food ecommerce.",
    image_path: "/images/burguer.png",
    deployed_url: "https://burguermaik.netlify.app/",
    github_url: "https://github.com/mcljs/ecommerceGatsby",
    category: ["gatsby"],
    key_techs: ["React", "Gatsby" , "Styled-Components"],
  },

 {
    id: 4,
    name: "Fundación Misión Arbol",
    image_path: "/images/arbol.png",
    deployed_url: "https://mision-arbol.netlify.app/",
    github_url: "https://github.com/mcljs/mision-arbol",
    category: ["gatsby"],
    description:
      "Institutional website, which contains information and posts about the mission tree foundation.",
    key_techs: ["React", "Gatsby" ,"Tailwindcss"],
  },
];
