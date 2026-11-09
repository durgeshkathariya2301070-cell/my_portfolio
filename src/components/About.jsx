
import { ArrowUpRight, GraduationCap, MapPin } from 'lucide-react'

export default function About() {
  return (
    <section className="section-padding" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">01 / ABOUT ME</span>
          <h2 className="display-font">
            A little about <span className="gradient-text">me.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="glass-card about-main">
            <span className="about-symbol">D.</span>
            <h3 className="display-font">Curiosity drives everything I build.</h3>
            <p>
              I'm Durgesh Kathariya, a Computer Science and Engineering
              student with a strong interest in Artificial Intelligence,
              Machine Learning and Data Science.
            </p>
            <p>
              I enjoy exploring new technologies, developing practical
              applications and turning ideas into useful digital experiences.
              My goal is to grow as an AI/ML Engineer and Data Scientist and contribute to
              meaningful technology projects.
            </p>
            <a href="#contact" className="about-link">
              Get in touch <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="about-details">
            <div className="glass-card detail-card">
              <GraduationCap size={25} />
              <span>EDUCATION</span>
              <h3>BE Computer Science & Engineering</h3>
              <p>Sri Ramakrishna Engineering College</p>
              <p>2023 – 2027</p>
            </div>

            <div className="glass-card detail-card">
              <MapPin size={25} />
              <span>LOCATION</span>
              <h3>Kailali, Nepal</h3>
              <p>Based in India for education</p>
            </div>

            <div className="glass-card detail-card">
              <span className="about-stat">7.79</span>
              <span>ACADEMIC CGPA</span>
              <h3>Current academic score</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
