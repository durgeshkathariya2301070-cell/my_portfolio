import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GitFork,
  Mail,
  Send,
  MapPin,
  Code2,
} from 'lucide-react'

const email = 'kathariyadurgesh@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    visitorEmail: '',
    subject: '',
    message: '',
  })

  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState({
    type: '',
    message: '',
  })

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

    setStatus({ type: '', message: '' })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setSending(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.visitorEmail,
          subject: form.subject,
          message: form.message,
          reply_to: form.visitorEmail,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully! Thank you for contacting me.',
      })

      setForm({
        name: '',
        visitorEmail: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('Contact form error:', error)

      setStatus({
        type: 'error',
        message: 'Sorry, your message could not be sent. Please try again later.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <section className="section-padding contact-section" id="contact">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">
              06 / GET IN TOUCH
            </span>

            <h2 className="display-font">
              Let's create something <span className="gradient-text">great.</span>
            </h2>

            <p>
              Have an opportunity, an interesting project or just want to
              connect? I'd be happy to hear from you.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-information glass-card">
              <span className="section-eyebrow">CONTACT INFORMATION</span>

              <h3 className="display-font">
                Let's start a <span className="gradient-text">conversation.</span>
              </h3>

              <p className="contact-intro">
                I'm interested in AI/ML, Data Science, software development
                opportunities and collaborations.
              </p>

              <a
                href={`mailto:${email}`}
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <Mail size={20} />
                </span>
                <span>
                  <small>EMAIL ME</small>
                  <strong>{email}</strong>
                </span>
                <ArrowUpRight size={17} />
              </a>

              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <MapPin size={20} />
                </span>
                <span>
                  <small>LOCATION</small>
                  <strong>Kailali, Nepal</strong>
                </span>
              </div>

              <div className="contact-socials">
                <span className="section-eyebrow">FIND ME ONLINE</span>

                <div className="contact-social-links">
                  <a
                    href="https://www.linkedin.com/in/durgesh-kathariya-19157635b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <BriefcaseBusiness size={19} />
                    LinkedIn
                    <ArrowUpRight size={14} />
                  </a>

                  <a
                    href="https://github.com/durgeshkathariya2301070-cell"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    <GitFork size={19} />
                    GitHub
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-card glass-card">
              <span className="section-eyebrow">SEND A MESSAGE</span>

              <h3 className="display-font">Get in touch.</h3>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <label>
                    Your Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Your Email
                    <input
                      type="email"
                      name="visitorEmail"
                      placeholder="Enter your email"
                      value={form.visitorEmail}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>

                <label>
                  Subject
                  <input
                    type="text"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="contact-submit-button"
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                  <Send size={16} />
                </button>

                {status.message && (
                  <p
                    role="status"
                    aria-live="polite"
                    style={{
                      color: status.type === 'success' ? '#22c55e' : '#ef4444',
                      marginTop: '12px',
                    }}
                  >
                    {status.message}
                  </p>
                )}

                <p className="contact-form-note">
                  Your message will be sent directly to my email. No email application is required.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <div className="container footer-content">
          <a href="#home" className="footer-brand display-font">
            DK<span>.</span>
          </a>

          <p>
            Designed & built by <strong>Durgesh Kathariya</strong>
          </p>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/durgesh-kathariya-19157635b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={18} />
            </a>

            <a
              href="https://github.com/durgeshkathariya2301070-cell"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitFork size={18} />
            </a>

            <a href={`mailto:${email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Durgesh Kathariya. All rights reserved.</span>
          <span>Built with <Code2 size={13} /> React & creativity.</span>
        </div>
      </footer>
    </>
  )
}
