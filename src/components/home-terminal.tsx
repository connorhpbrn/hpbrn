"use client";

import { useEffect, useState } from "react";
import { projects, socialLinks } from "@/content/site";

const ASCII_LINES = [
  "████╗  ██╗ ██████╗  ██████╗  ██████╗  ███╗   ██╗",
  " ██║  ██║ ██╔══██╗ ██╔══██╗ ██╔══██╗ ████╗  ██║",
  " ███████║ ██████╔╝ ██████╔╝ ██████╔╝ ██╔██╗ ██║",
  " ██╔══██║ ██╔═══╝  ██╔══██╗ ██╔══██╗ ██║╚██╗██║",
  " ██║  ██║ ██║      ██████╔╝ ██║  ██║ ██║ ╚████║",
  " ╚═╝  ╚═╝ ╚═╝      ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═══╝",
];

const PROMPT = "connor@hpbrn:~$ ";
const COMMAND = "connorhpbrn";
const TYPING_SEQUENCE = [
  "c",
  "co",
  "con",
  "conr",
  "conro",
  "conroh",
  "conro",
  "conr",
  "con",
  "conn",
  "conno",
  "connor",
  "connorh",
  "connorhp",
  "connorhpb",
  "connorhpbr",
  "connorhpbrn",
];

function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export function HomeTerminal() {
  const [typedCommand, setTypedCommand] = useState("");
  const [commandSubmitted, setCommandSubmitted] = useState(false);
  const [asciiVisibleCount, setAsciiVisibleCount] = useState(0);
  const [shellVisible, setShellVisible] = useState(false);
  const [projectsVisibleCount, setProjectsVisibleCount] = useState(0);
  const [footerVisible, setFooterVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setPrefersReducedMotion(media.matches);

    syncMotionPreference();
    media.addEventListener("change", syncMotionPreference);

    return () => media.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function runSequence() {
      if (prefersReducedMotion) {
        setTypedCommand(COMMAND);
        setCommandSubmitted(true);
        setAsciiVisibleCount(ASCII_LINES.length);
        setShellVisible(true);
        setProjectsVisibleCount(projects.length);
        setFooterVisible(true);
        return;
      }

      await wait(900);

      let previousLength = 0;

      for (const frame of TYPING_SEQUENCE) {
        if (cancelled) {
          return;
        }

        setTypedCommand(frame);

        const isBackspace = frame.length < previousLength;
        previousLength = frame.length;
        await wait(isBackspace ? 180 : 240);
      }

      if (cancelled) {
        return;
      }

      setCommandSubmitted(true);
      await wait(520);

      for (let index = 1; index <= ASCII_LINES.length; index += 1) {
        if (cancelled) {
          return;
        }

        setAsciiVisibleCount(index);
        await wait(170);
      }

      if (cancelled) {
        return;
      }

      setShellVisible(true);
      await wait(420);

      for (let index = 1; index <= projects.length; index += 1) {
        if (cancelled) {
          return;
        }

        setProjectsVisibleCount(index);
        await wait(180);
      }

      if (cancelled) {
        return;
      }

      await wait(320);
      setFooterVisible(true);
    }

    runSequence();

    return () => {
      cancelled = true;
    };
  }, [prefersReducedMotion]);

  return (
    <main className="terminal">
      <div className="command-line" aria-label="Terminal command">
        <span className="prompt">{PROMPT}</span>
        <span className="typed-command">{typedCommand}</span>
        <span
          className={`cursor ${
            commandSubmitted ? "cursor-submitted" : "cursor-live"
          }`}
          aria-hidden="true"
        />
      </div>

      <div className={`output-block ${commandSubmitted ? "is-visible" : ""}`}>
        <div className="title-wrap" aria-hidden={asciiVisibleCount === 0}>
          {ASCII_LINES.map((line, index) => (
            <div
              key={line}
              className={`ascii-line ${
                index < asciiVisibleCount ? "ascii-line-visible" : ""
              }`}
            >
              {line}
            </div>
          ))}
        </div>

        <div className={`shell-block ${shellVisible ? "is-visible" : ""}`}>
          <div className="terminal-line section-separator">
            ════════════════════════════════
          </div>
          <div className="terminal-prompt">selected-work:</div>
        </div>

        <section
          className={`projects ${projectsVisibleCount > 0 ? "is-visible" : ""}`}
        >
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={`project-link ${
                index < projectsVisibleCount ? "project-link-visible" : ""
              }`}
            >
              <span className="project-index">[{index + 1}]</span>
              <span className="project-name">{project.name}</span>
              <span className="project-desc">— {project.descriptor}</span>
            </a>
          ))}
        </section>

        <footer className={`footer ${footerVisible ? "is-visible" : ""}`}>
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
      </div>
    </main>
  );
}
