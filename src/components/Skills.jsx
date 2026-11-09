
import { Code2, Brain, Database, Wrench } from 'lucide-react'

const skillGroups = [
  {
    title: 'Programming & Web',
    icon: Code2,
    skills: ['Python', 'Java', 'HTML', 'CSS', 'React.js'],
  },
  {
    title: 'AI & Machine Learning and Data Science',
    icon: Brain,
    skills: ['Artificial Intelligence', 'Machine Learning', 'Generative AI', 'Data Science'],
  },
  {
    title: 'Data & Libraries',
    icon: Database,
    skills: ['NumPy', 'Matplotlib', 'MySQL'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Google Colab'],
  },
]

export default function Skills() {
  return (
    <section className="section-padding" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">02 / MY EXPERTISE</span>
          <h2 className="display-font">
            Tools of my <span className="gradient-text">trade.</span>
          </h2>
          <p>Technologies and tools I'm learning and working with.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <div className="glass-card skill-card" key={group.title}>
                <div className="skill-card-heading">
                  <Icon size={23} />
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
