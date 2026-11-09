
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-glow soft-glow" />

      <div className="hero-content">
        <div className="hero-label">
          <span className="availability-dot" />
          ASPIRING AI/ML ENGINEER
        </div>

        <h1 className="hero-title display-font">
          Hello, I'm
          <br />
          <span className="gradient-text">Durgesh Kathariya.</span>
        </h1>

        <p className="hero-description">
          A Computer Science Engineering student passionate about
          Artificial Intelligence, Machine Learning, Data Science and building
          technology that solves real-world problems.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            Explore my work <ArrowUpRight size={18} />
          </a>

          <a href="#about" className="secondary-button">
            More about me <ArrowDown size={17} />
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/durgeshkathariya2301070-cell"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/durgesh-kathariya-19157635b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>

          <a href="mailto:kathariyadurgesh@gmail.com">
            kathariyadurgesh@gmail.com
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-frame">
          <img
            src="/images/profile.jpg"
            alt="Durgesh Kathariya"
            className="profile-photo"
          />
        </div>

        <div className="floating-card">
          <span className="floating-card-icon">✳</span>
          <div>
            <strong>Curious mind.</strong>
            <p>Creative problem solver.</p>
          </div>
        </div>

        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
      </div>

      <div className="hero-bottom-note">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
        <span>01 — 08</span>
      </div>
    </section>
  )
}
