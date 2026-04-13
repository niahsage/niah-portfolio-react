import "../styles/projects.css";

function ProjectCard({
  image,
  title,
  description,
  tools,
  liveLink,
  buttonText,
}) {
  return (
    <article className="project-card">
      <img src={image} alt={title} className="project-image" />

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="project-tools">
          <strong>Tools:</strong> {tools}
        </p>

        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            {buttonText}
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;