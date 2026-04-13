import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";
import { motion } from "framer-motion";
import astroloveImg from "../assets/images/astrolove.jpg";
import exerciseAppImg from "../assets/images/exercise-app.jpg";
import daylistImg from "../assets/images/daylist.jpg";
import vinylImg from "../assets/images/vinyl.jpg";
import lightImg from "../assets/images/light.jpg";

function Projects() {
  const projects = [
    {
      image: astroloveImg,
      title: "Astrolove",
      description:
        "A dating app concept that combines astrology, branding, and interface design. I focused on creating a cohesive visual identity and a polished app experience.",
      tools: "Figma, Illustrator, UI Design, Branding",
      liveLink: "https://niahsage.github.io/astrolove/",
      buttonText: "View Live Site",
    },
    {
      image: exerciseAppImg,
      title: "React Native Exercise App",
      description:
        "A fitness app project with interactive screens and exercise tracking features. This piece highlights both interface design and front-end development.",
      tools: "React Native, JavaScript, UI Design",
      liveLink: "https://niahsage.github.io/react-native-exercise-app/",
      buttonText: "View Live Site",
    },
    {
      image: daylistImg,
      title: "Daylist",
      description:
        "A productivity app concept with multiple screens for login, task management, adding tasks, and confirmation states. The design focuses on calm visuals and clear organization.",
      tools: "UI Design, App Design, Branding, Layout",
      liveLink: "https://niahsage.github.io/expo-todo-list/",
      buttonText: "View Web Version",
    },
    {
      image: vinylImg,
      title: "Vinyl Packaging",
      description:
        "A vinyl packaging design for The Flat Stanleys that explores typography, imagery, and album identity. This project highlights my graphic design and layout skills.",
      tools: "Illustrator, Photoshop, Packaging Design",
      liveLink: "",
      buttonText: "",
    },
    {
      image: lightImg,
      title: "Light — Interactive Narrative",
      description:
        "A short interactive story built in Twine that explores choice, attention, and mood through minimal text and branching decisions. The project combines storytelling with digital interaction.",
      tools: "Twine, Interactive Narrative, Story Design",
      liveLink: "https://niahsage.itch.io/light",
      buttonText: "Play Experience",
    },
  ];

  return (
    <motion.section
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="projects-header">
        <p className="eyebrow">Selected Work</p>
        <h2>Projects</h2>
        <p className="projects-intro">
          A mix of web, app, branding, graphic design, and interactive projects
          that reflect my creative interests and technical skills.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;