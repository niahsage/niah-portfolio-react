import { motion } from "framer-motion";
import "../styles/about.css";
import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="about-image">
        <img src={aboutImage} alt="Creative work by Niah Mckyton" />
      </div>

      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I’m a UCF Digital Media student interested in web design, graphic
          design, branding, and interactive storytelling. I enjoy creating
          projects that feel polished, creative, and visually intentional.
        </p>

        <h3>Skills</h3>
        <ul>
          <li>Web Design</li>
          <li>Front-End Development</li>
          <li>Branding & Visual Design</li>
          <li>UI / App Design</li>
          <li>Interactive Storytelling</li>
        </ul>

        <h3>Tools</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>Figma</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Twine</li>
        </ul>
      </div>
    </motion.section>
  );
}

export default About;