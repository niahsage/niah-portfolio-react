import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/home.css";
import heroImage from "../assets/images/hero.jpg";

function Home() {
  return (
    <section className="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="home-text">
          <p className="eyebrow">Web • Branding • Interactive Design</p>
          <h1>Hi, I’m Niah.</h1>
          <p className="intro">
            I’m a digital media designer focused on web design, branding,
            graphic design, and interactive storytelling.
          </p>

          <div className="home-buttons">
            <Link to="/projects" className="btn">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="home-image">
          <img src={heroImage} alt="Featured work from Niah's portfolio" />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;