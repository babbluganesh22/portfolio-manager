import { skillGroups } from '../data/skills'
import './Skills.css'

function Skills() {
  return (
    <section id="skills">
      <div className="eyebrow">skills.json</div>

      <div className="imports">
        <div>
          <span className="kw">import</span> <span className="punc">{'{'}</span>{' '}
          <span className="prop">backend</span><span className="punc">,</span>{' '}
          <span className="prop">frontend</span><span className="punc">,</span>{' '}
          <span className="prop">infra</span> <span className="punc">{'}'}</span>{' '}
          <span className="kw">from</span> <span className="str">"./stack"</span>
          <span className="punc">;</span>
        </div>
      </div>

      <p className="about-text">
        I'm most at home <strong>designing APIs and data models</strong>, but I ship the
        full path from database schema to the button someone clicks. I care about clear
        error messages, boring reliable infrastructure, and code reviews that teach something.
      </p>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h4>{group.title}</h4>
            <div className="pill-row">
              {group.items.map((item) => (
                <span className="pill" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills