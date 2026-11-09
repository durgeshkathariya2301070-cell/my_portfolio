
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  ExternalLink,
  FileText,
  CalendarDays,
  BriefcaseBusiness,
} from 'lucide-react'

const internships = [
  {
    number: '01',
    company: 'RBG.AI',
    fullCompany: 'Resilience Business Grids LLP',
    role: 'Machine Learning Intern',
    period: 'June 06 – June 21, 2025',
    duration: '2 Weeks',
    project: 'Research and Evaluation of Multilingual Speech and Language Models',
    description:
      'Worked on research and evaluation of multilingual speech and language technologies, with a focus on machine translation for Indian languages. Explored transformer-based models, evaluated translation quality using BLEU scores, and contributed to multilingual voice dataset preparation.',
    responsibilities: [
      'Benchmarked Hugging Face translation models for Indian languages.',
      'Evaluated machine translation results using BLEU scores.',
      'Used Python and Google Colab for model experiments.',
      'Collected and organized multilingual speech datasets.',
      'Explored transformer models and voice deepfake detection datasets.',
    ],
    technologies: [
      'Python',
      'Machine Learning',
      'NLP',
      'Hugging Face',
      'Google Colab',
    ],
    icon: BrainCircuit,
    theme: 'rbg-experience',
    certificate: '/documents/durgesh%20completion.pdf',
    report: '/documents/report%20rbg.pdf',
  },
  {
    number: '02',
    company: 'NEXORIS',
    fullCompany: 'Nexoris Solutions',
    role: 'Frontend Developer Intern',
    period: 'December 08 – December 23, 2025',
    duration: '2 Weeks',
    project: 'Home Ease – Household Services Web Application',
    description:
      'Contributed to the frontend development of Home Ease, an on-demand household services platform. Worked on reusable React components, responsive user interfaces and customer-facing pages, while coordinating frontend tasks and maintaining consistent UI design.',
    responsibilities: [
      'Developed reusable React components for the application.',
      'Built customer-facing login and authentication interfaces.',
      'Worked on service selection and customer dashboard pages.',
      'Designed account settings and responsive layouts.',
      'Coordinated frontend tasks and reviewed UI components.',
    ],
    technologies: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'UI/UX Design',
    ],
    icon: Code2,
    theme: 'nexoris-experience',
    certificate: '/documents/nexoris%20competion%20certificate.pdf',
    report: '/documents/nexrois%20report1.pdf',
  },
]

export default function Experience() {
  return (
    <section className="section-padding" id="experience">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">
            04 / PROFESSIONAL EXPERIENCE
          </span>

          <h2 className="display-font">
            Where I've <span className="gradient-text">learned.</span>
          </h2>

          <p>
            Practical experience, collaborative work and learning through
            real-world projects.
          </p>
        </div>

        <div className="experience-list">
          {internships.map((internship) => {
            const Icon = internship.icon

            return (
              <article
                className={`glass-card experience-card ${internship.theme}`}
                key={internship.number}
              >
                <div className="experience-top">
                  <div className="experience-icon">
                    <Icon size={30} strokeWidth={1.5} />
                  </div>

                  <div className="experience-company">
                    <span className="section-eyebrow">
                      INTERNSHIP {internship.number}
                    </span>
                    <h3 className="display-font">{internship.company}</h3>
                    <p>{internship.fullCompany}</p>
                  </div>

                  <div className="experience-duration">
                    <span>
                      <CalendarDays size={14} />
                      {internship.period}
                    </span>
                    <small>{internship.duration}</small>
                  </div>
                </div>

                <div className="experience-details">
                  <span className="experience-role">
                    <BriefcaseBusiness size={15} />
                    {internship.role}
                  </span>

                  <h4>{internship.project}</h4>

                  <p className="experience-description">
                    {internship.description}
                  </p>

                  <h5>What I worked on</h5>

                  <ul className="experience-responsibilities">
                    {internship.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="experience-tech">
                    {internship.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="experience-documents">
                    <a
                      href={internship.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-document-button"
                    >
                      <FileText size={16} />
                      View Certificate
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={internship.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-document-button secondary"
                    >
                      <FileText size={16} />
                      View Internship Report
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="experience-additional">
          <h3 className="display-font">Additional Certificate</h3>
          <a
            href="/documents/DURGESH-KATHARIYA-Participant%20-python-Certificate%201.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-document-button"
          >
            <FileText size={16} />
            View Python Participation Certificate
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="projects-footer experience-footer">
          <span>LEARNING THROUGH REAL-WORLD EXPERIENCE</span>
          <ArrowUpRight size={17} />
        </div>
      </div>
    </section>
  )
}
