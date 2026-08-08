import './Hero.css'
import calculateExperience from '../utils/experience'

const experience = calculateExperience('2024-09-30') // Example usage, you can replace the date with your actual start date

function Hero() {
  return (
    <section id="hero">
      <div className="eyebrow">about.tsx</div>

      <div className="hero-code">
        <span className="kw">const</span> <span className="prop">developer</span> <span className="punc">=</span> <span className="punc">{'{'}</span><br />
        &nbsp;&nbsp;<span className="prop">name</span><span className="punc">:</span> <span className="str">"Ganesh Bompelly"</span><span className="punc">,</span><br />
        &nbsp;&nbsp;<span className="prop">role</span><span className="punc">:</span> <span className="str">"Full-Stack Software Engineer"</span><span className="punc">,</span><br />
        &nbsp;&nbsp;<span className="prop">based_in</span><span className="punc">:</span> <span className="str">"Hyderabad, Telangana"</span><span className="punc">,</span><br />
        &nbsp;&nbsp;<span className="prop">focus</span><span className="punc">:</span> <span className="punc">[</span><span className="str">"distributed systems"</span><span className="punc">,</span> <span className="str">"Development"</span><span className="punc">,</span> <span className="str">"Data Engineering"</span><span className="punc">,</span> <span className="str">"devops"</span><span className="punc">,</span> <span className="str">"AI/ML"</span><span className="punc">]</span><br />
        <span className="punc">{'}'}</span><span className="cursor"></span>
      </div>

      <h1 className="hero-title">
        Building things that <span className="accent">compile the first time.</span><br />
        Occasionally.
      </h1>
      <p className="hero-sub">
        I design and ship backend systems, APIs, Data Pipelines and the odd overengineered CLI tool.
        Currently obsessed with making slow things fast and fast things reliable.
      </p>

      <div className="btn-row">
        <a href="#projects" className="btn btn-primary">→ View projects</a>
        <a href="#contact" className="btn btn-ghost">$ get in touch</a>
      </div>

      <div className="stats-row">
        <div>
          <div className="stat-num">{experience.formatted}</div>
          <div className="stat-label">Of shipping</div>
        </div>
        <div>
          <div className="stat-num">40+</div>
          <div className="stat-label">Projects deployed</div>
        </div>
        <div>
          <div className="stat-num">♾️</div>
          <div className="stat-label">Entusiast</div>
        </div>
        <div>
          <div className="stat-num">99.95%</div>
          <div className="stat-label">Uptime, last quarter</div>
        </div>
      </div>
    </section>
  )
}

export default Hero