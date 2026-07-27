import { VscVscode } from "react-icons/vsc";

import {
  FaReact,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaShopify,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiLaravel,
  SiCodeigniter,
  SiGraphql,
  SiPostman,
  SiJquery,
  SiHtml5,
  SiCss,
  SiSelenium,
  SiNumpy,
  SiPandas,
  SiJsonwebtokens,
  SiBootstrap,
  SiVite,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend Development",
    items: [
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
      },
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-sky-400",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "text-purple-500",
      },
      {
        name: "jQuery",
        icon: SiJquery,
        color: "text-blue-400",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "text-violet-400",
      },
    ],
  },

  {
    title: "Backend Development",
    items: [
      {
        name: "PHP",
        icon: FaPhp,
        color: "text-indigo-400",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "text-red-500",
      },
      {
        name: "CodeIgniter",
        icon: SiCodeigniter,
        color: "text-orange-500",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "text-red-400",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "text-yellow-500",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-500",
      },
      {
        name: "REST API",
        icon: SiJsonwebtokens,
        color: "text-green-400",
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        color: "text-pink-500",
      },
    ],
  },

  {
    title: "Data Analysis",
    items: [
      {
        name: "Python",
        icon: FaPython,
        color: "text-yellow-500",
      },
      {
        name: "NumPy",
        icon: SiNumpy,
        color: "text-cyan-400",
      },
      {
        name: "Pandas",
        icon: SiPandas,
        color: "text-purple-400",
      },
      {
        name: "SQL",
        icon: SiMysql,
        color: "text-blue-500",
      },
    ],
  },

  {
    title: "Tools & Platforms",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-400",
      },
      {
        name: "Shopify",
        icon: FaShopify,
        color: "text-green-500",
      },
      {
        name: "Figma",
        icon: FaFigma,
        color: "text-pink-400",
      },
      {
        name: "Selenium",
        icon: SiSelenium,
        color: "text-green-400",
      },
    ],
  },
];

export default skills;