import {
  FaReact,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaShopify,
  FaPython,
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
} from "react-icons/si";

const skills = [
  {
    title: "Frontend Development",
    items: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "jQuery", icon: SiJquery, color: "text-blue-400" },
    ],
  },

  {
    title: "Backend Development",
    items: [
      { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
      { name: "CodeIgniter", icon: SiCodeigniter, color: "text-orange-500" },
      { name: "Java", icon: FaJava, color: "text-red-400" },
      { name: "Python", icon: FaPython, color: "text-yellow-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      { name: "REST API", icon: SiJsonwebtokens, color: "text-green-400" },
      { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
    ],
  },

  {
    title: "Data Analysis",
    items: [
      { name: "Python", icon: FaPython, color: "text-yellow-500" },
      { name: "NumPy", icon: SiNumpy, color: "text-cyan-400" },
      { name: "Pandas", icon: SiPandas, color: "text-purple-400" },
    ],
  },

  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
      { name: "Shopify", icon: FaShopify, color: "text-green-500" },
      { name: "Figma", icon: FaFigma, color: "text-pink-400" },
      { name: "Selenium", icon: SiSelenium, color: "text-green-400" },
    ],
  },
];

export default skills;