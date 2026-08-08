import { contactInfo } from '../data/contact'
import './Contact.css'

function Contact() {
  return (
    <section id="contact">
      <div className="eyebrow">contact.sh</div>
      <h2 className="section-heading">Let's build something</h2>
      <p className="about-text">
        Open to backend-heavy roles, Agentic workflows, and interesting data engineering projects.
        Fastest way to reach me is email.
      </p>

      <div className="terminal">
        <div className="line">
          <span className="prompt">$</span> <span className="path">~/ganesh</span> whoami --contact
        </div>
        <div className="line out">→ email:    {contactInfo.email}</div>
        <div className="line out">→ github:   {contactInfo.github}</div>
        <div className="line out">→ linkedin: {contactInfo.linkedin}</div>
        <div className="line">
          <span className="prompt">$</span> <span className="path">~/ganesh</span> <span className="cursor"></span>
        </div>
      </div>

      <div className="contact-links">
        <a href={`mailto:${contactInfo.email}`} className="btn btn-primary">→ Email me</a>
        <a href={`https://${contactInfo.github}`} className="btn btn-ghost">GitHub</a>
        <a href={`https://${contactInfo.linkedin}`} className="btn btn-ghost">LinkedIn</a>
        <a href="#" className="btn btn-ghost">Resume (PDF)</a>
      </div>
    </section>
  )
}

export default Contact