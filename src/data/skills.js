import {
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaShopify,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiCodeigniter,
  SiCss,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMysql,
  SiPostman,
  SiSelenium,
  SiTailwindcss,
  SiVite,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss, color: "text-blue-500" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-violet-500" },
      { name: "jQuery", icon: SiJquery, color: "text-blue-400" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
      { name: "CodeIgniter", icon: SiCodeigniter, color: "text-orange-500" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "REST API", icon: SiJsonwebtokens, color: "text-emerald-400" },
      { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
      { name: "Shopify", icon: FaShopify, color: "text-green-500" },
    ],
  },
  {
    title: "Database",
    items: [{ name: "MySQL", icon: SiMysql, color: "text-blue-500" }],
  },
  {
    title: "Programming Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
      { name: "Java", icon: FaJava, color: "text-red-400" },
      { name: "Python", icon: FaPython, color: "text-yellow-500" },
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-slate-900" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
      { name: "Figma", icon: FaFigma, color: "text-pink-400" },
      { name: "Selenium", icon: SiSelenium, color: "text-green-500" },
      { name: "Vite", icon: SiVite, color: "text-violet-400" },
    ],
  },
];

export default skills;
