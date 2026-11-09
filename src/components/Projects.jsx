
import {
  ArrowUpRight,
  ExternalLink,
  Footprints,
  Sprout,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'SOLEVERSE',
    category: 'E-COMMERCE WEBSITE',
    description:
      'SOLEVERSE is a premium shoe e-commerce platform designed to make online footwear shopping simple and convenient. Users can explore shoes, create accounts, manage their shopping cart and complete checkout. It also includes an admin dashboard for managing products, inventory and customer orders.',
    technologies: ['React', 'Supabase'],
    icon: Footprints,
    theme: 'shoe-project',
    status: 'Completed',
    demo: 'https://soleverse-shoe-website-346xuj1p4-durgeshkathariya2301070-5573.vercel.app/',
  },
  {
    number: '02',
    title: 'Smart Agri Market',
    category: 'SMART AGRICULTURE',
    description:
      'Smart Agri Market is a web-based marketplace focused on the agricultural ecosystem. It provides a digital platform for exploring agriculture-related offerings through an online interface. The project aims to make agricultural discovery and marketplace access more convenient through technology.',
    technologies: ['Web Development', 'Agriculture'],
    icon: Sprout,
    theme: 'agri-project',
    status: 'Live Project',
    demo: 'https://smart-agri-market.netlify.app',
  },
]

export default function Projects() {
  return (
    <section className="section-padding" id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">03 / SELECTED WORK</span>

          <h2 className="display-font">
            Things I've <span className="gradient-text">built.</span>
          </h2>

          <p>
            A collection of projects where ideas turn into real applications.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon

            return (
              <article
                className="glass-card project-card"
                key={project.number}
              >
                {/* Project visual */}
                <div className={`project-cover ${project.theme}`}>
                  <span className="project-number">
                    {project.number} / 02
                  </span>

                  <div className="project-cover-icon">
                    <Icon size={76} strokeWidth={1.2} />
                  </div>

                  <span className="project-cover-name display-font">
                    {project.title}
                  </span>
                </div>

                {/* Project information */}
                <div className="project-content">
                  <div className="project-category-row">
                    <span className="section-eyebrow">
                      {project.category}
                    </span>

                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="display-font">{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  {/* Live demo button */}
                  <div className="project-actions">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-demo-button"
                    >
                      View Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="projects-footer">
          <span>MORE PROJECTS WILL BE ADDED SOON</span>
          <ArrowUpRight size={17} />
        </div>
      </div>
    </section>
  )
}
