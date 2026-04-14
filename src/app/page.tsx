import { projects, socialLinks } from "@/content/site";

export default function Home() {
  return (
    <main className="terminal">
      <pre className="title">{`████╗  ██╗ ██████╗  ██████╗  ██████╗  ███╗   ██╗
 ██║  ██║ ██╔══██╗ ██╔══██╗ ██╔══██╗ ████╗  ██║
 ███████║ ██████╔╝ ██████╔╝ ██████╔╝ ██╔██╗ ██║
 ██╔══██║ ██╔═══╝  ██╔══██╗ ██╔══██╗ ██║╚██╗██║
 ██║  ██║ ██║      ██████╔╝ ██║  ██║ ██║ ╚████║
 ╚═╝  ╚═╝ ╚═╝      ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═══╝`}</pre>
      <div className="terminal-line">╔══════════════════════════════════╗</div>
      <div className="terminal-line">║  connor@hpbrn:~$ ./selected-work  ║</div>
      <div className="terminal-line">╚══════════════════════════════════╝</div>

      <section className="projects">
        {projects.map((project, i) => (
          <a 
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <span className="project-index">[{i + 1}]</span>
            <span className="project-name">{project.name}</span>
            <span className="project-desc">— {project.descriptor}</span>
          </a>
        ))}
      </section>

      <footer className="footer">
        <div className="terminal-line">════════════════════════════════</div>
        <div className="terminal-prompt">connect:</div>
        <div className="socials">
          {socialLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              [{link.label}]
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}