import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
  return (
    <section id="projects">
      <div className="eyebrow">projects.ts</div>
      <h2 className="section-heading">Selected work</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  )
}

export default Projects