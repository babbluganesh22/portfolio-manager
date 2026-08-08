import './ProjectCard.css'

function ProjectCard({ project }) {
  const { name, tag, desc, stack, links } = project

  return (
    <div className="project-card">
      <div className="project-top">
        <div className="project-name">{name}</div>
        <div className="project-tag">{tag}</div>
      </div>

      <p className="project-desc">{desc}</p>

      <div className="project-meta">
        {stack.map((tech) => (
          <span
            className="lang-dot"
            style={{ '--dot-color': tech.color }}
            key={tech.label}
          >
            {tech.label}
          </span>
        ))}

        <div className="project-links">
          <a href={links.primary.href}>{links.primary.label}</a>
          <a href={links.github}>GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard