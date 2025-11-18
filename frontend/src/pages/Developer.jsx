// src/pages/Developer.jsx
import {
  FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaPhone,
  FaGraduationCap, FaBriefcase, FaCode, FaTrophy, FaHeartbeat,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function Developer() {
  const skills = ['Unity3D', 'Photoshop', '3ds Max', 'IntelliJ', 'NetBeans', 'Teamwork', 'Communication', 'Agile'];
  const interests = ['Physical Fitness', 'Game Development', 'Football', 'Musical Instruments', 'Gaming'];

  return (
    <div className="container py-lg fade-in">
      <div className="glass-card mb-lg" style={{ textAlign: 'center' }}>
        <h1 className="text-gradient mb-sm">Ntokozo Ntshangase</h1>
        <p className="lead mb-sm">Honours Graduate | Full-Stack Developer</p>
        <p style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-xs)' }}>
          <FaMapMarkerAlt /> Durban, Kwa-Zulu Natal
        </p>

        {/* Contact Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-lg)' }}>
          <a href="https://github.com/tkntsh" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FaGithub /> GitHub
          </a>
          <a href="https://ntshportfolio.lovable.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FaGlobe /> Portfolio
          </a>
          <a href="https://www.linkedin.com/in/ntokozo-ntshangase-8605672a0/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:ntokntshangase@gmail.com" className="btn btn-secondary">
            <FaEnvelope /> Email
          </a>
          <a href="tel:+27614669056" className="btn btn-secondary">
            <FaPhone /> (+27) 61 466 9056
          </a>
        </div>
      </div>

      {/* Career Objective */}
      <div className="glass-card mb-lg">
        <h3 className="mb-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          🎯 Career Objective
        </h3>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
          Driven by curiosity and a passion for using technology to inspire innovation and uplift communities,
          I am a Computer Science and Postgraduate Diploma in e-Skills graduate. I thrive on exploring creative
          solutions to complex challenges and have strong technical skills and problem-solving abilities. I am
          eager to embrace new responsibilities that foster growth and enhance my skill set.
        </p>
      </div>

      {/* Education */}
      <div className="glass-card mb-lg">
        <h3 className="mb-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <FaGraduationCap style={{ color: 'var(--color-primary)' }} /> Education
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {[
            {
              title: 'Postgraduate Diploma in E-Skills',
              institution: 'University of the Western Cape',
              period: 'Feb 2024 - Dec 2024',
              details: [
                'Project: AR application for Slave Lodge Museum (C#, Unity, 3D Modeling)',
                'Skills: Project Management, Android Dev, AR/VR, Software Engineering'
              ]
            },
            {
              title: 'BSc Computer Science',
              institution: 'University of the Western Cape',
              period: 'Feb 2021 - Dec 2023',
              details: [
                'Capstone: Web-based clothing store (HTML, CSS, JS)',
                'Languages: Java, Python, C, C++, R, SAS'
              ]
            },
            {
              title: 'Matric Certificate',
              institution: 'Curro Hillcrest High School',
              period: '2020',
              details: ['Java music playlist app with OOP']
            }
          ].map((edu, idx) => (
            <div
              key={idx}
              style={{
                padding: 'var(--spacing-md)',
                background: 'var(--color-bg-tertiary)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--glass-border)',
                transition: 'all var(--transition-base)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <h5 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-xs)' }}>{edu.title}</h5>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', marginBottom: 'var(--spacing-sm)' }}>
                {edu.institution} ({edu.period})
              </p>
              <ul style={{ margin: 0, paddingLeft: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                {edu.details.map((detail, i) => (
                  <li key={i} style={{ marginBottom: 'var(--spacing-xs)' }}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="glass-card mb-lg">
        <h3 className="mb-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <FaBriefcase style={{ color: 'var(--color-primary)' }} /> Experience
        </h3>
        <div className="grid grid-cols-2">
          <div className="glass-card">
            <h5 style={{ color: 'var(--color-primary)' }}>Outlier</h5>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
              AI Model Tester (Jan 2025 – Present)
            </p>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              Java, Python | AI testing, debugging, QA
            </p>
          </div>
          <div className="glass-card">
            <h5 style={{ color: 'var(--color-primary)' }}>Hex Softwares</h5>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
              Software Engineer Intern (May–Jun 2025)
            </p>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              Java | Remote project development
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="glass-card mb-lg">
        <h3 className="mb-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <FaCode style={{ color: 'var(--color-primary)' }} /> Skills
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
          {skills.map(skill => (
            <span
              key={skill}
              style={{
                padding: 'var(--spacing-sm) var(--spacing-md)',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '600',
                color: 'var(--color-text-secondary)',
                transition: 'all var(--transition-base)',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements & Interests */}
      <div className="grid grid-cols-2">
        <div className="glass-card">
          <h3 className="mb-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <FaTrophy style={{ color: 'var(--color-warning)' }} /> Achievement
          </h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Eternal Joy Church: Small group leadership course completed
          </p>
        </div>
        <div className="glass-card">
          <h3 className="mb-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <FaHeartbeat style={{ color: 'var(--color-accent)' }} /> Interests
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xs)' }}>
            {interests.map(interest => (
              <span
                key={interest}
                style={{
                  padding: '6px 12px',
                  background: 'var(--color-bg-tertiary)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-text-secondary)'
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}