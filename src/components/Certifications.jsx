
import {
  Award,
  ExternalLink,
  FileText,
  GraduationCap,
} from 'lucide-react'

const certifications = [
  {
    number: '01',
    title: 'Python 3.4.3 Training',
    provider: 'Spoken Tutorial Project, IIT Bombay',
    organization: 'Organized at Sri Ramakrishna Engineering College',
    date: 'March 13, 2025',
    score: '85%',
    credits: '4 Credits',
    category: 'PROGRAMMING',
    description:
      'Successfully completed Python 3.4.3 training through the Spoken Tutorial Project at IIT Bombay, demonstrating practical understanding of Python programming fundamentals.',
    document:
      '/documents/DURGESH-KATHARIYA-Participant%20-python-Certificate%201.pdf',
  },
]

export default function Certifications() {
  return (
    <section className="section-padding" id="certifications">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">
            05 / CERTIFICATIONS
          </span>

          <h2 className="display-font">
            Learning never <span className="gradient-text">stops.</span>
          </h2>

          <p>
            Certifications that reflect my commitment to continuous learning
            and technical growth.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate) => (
            <article className="glass-card certification-card" key={certificate.number}>
              <div className="certificate-visual">
                <div className="certificate-decoration">
                  <Award size={65} strokeWidth={1.1} />
                </div>

                <span className="certificate-number">
                  CERTIFICATION {certificate.number}
                </span>

                <span className="certificate-visual-title display-font">
                  {certificate.title}
                </span>
              </div>

              <div className="certification-content">
                <span className="section-eyebrow">
                  {certificate.category}
                </span>

                <h3 className="display-font">{certificate.title}</h3>

                <p className="certificate-provider">
                  <GraduationCap size={16} />
                  {certificate.provider}
                </p>

                <p className="certificate-organization">
                  {certificate.organization}
                </p>

                <p className="certificate-description">
                  {certificate.description}
                </p>

                <div className="certificate-meta">
                  <span>{certificate.date}</span>
                  <span>Score: {certificate.score}</span>
                  <span>{certificate.credits}</span>
                </div>

                <a
                  href={certificate.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-button"
                >
                  <FileText size={17} />
                  View Certificate
                  <ExternalLink size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
