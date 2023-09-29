import Socials from "@/Components/Socials";
import { Navigation } from "@/Components/Navigation";
import Particles from "@/Components/particles";
import Link from "next/link";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <main className="flex flex-col items-center justify-center w-screen md:h-screen overflow-scroll bg-gradient-to-tl from-black via-zinc-600/20 to-black font-mono ">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <Navigation first_link={"projects"} second_link={"contact"} />
      <div className="text-center animate-fade-in  mt-20 sm:mt-12 md:mt-22 lg:mt-28">
        <header>
          <h1 className="text-4xl lg:text-5xl">Layaida Samy</h1>
          <p>
            Student at&nbsp;
            <Link href={"https://epitech.eu/"} className="underline">
              Epitech Paris
            </Link>
          </p>
        </header>
        <br />
        <div className="container mx-auto w-[90%] bg-white rounded-xl bg-opacity-10 py-1">
          <section id="about">
            <h2 className="text-2xl lg:text-3xl font-bold">About Me</h2>
            <p className="mx-10">
              I am a dedicated and passionate student at Epitech Paris with a
              strong interest in DevOps engineering and web development.
            </p>
          </section>
          <br />
          <section id="skills">
            <h2 className="text-2xl lg:text-3xl font-bold">Skills</h2>
            <ul className="mx-10 text-center">
              <li>Web Development(React.JS, Java Spring)</li>
              <li>Linux System Administration</li>
              <li>Scripting (Bash, Python)</li>
              <li>Containerization (Docker)</li>
              <li>Orchestration (Kubernetes)</li>
              <li>CI/CD Pipelines (Jenkins, GitLab CI/CD)</li>
              <li>Infrastructure as Code (Terraform)</li>
              <li>Version Control (Git)</li>
              <li>Monitoring and Logging (Prometheus, Grafana, ELK Stack)</li>
            </ul>
          </section>
          <br />
          <section id="experience">
            <h2 className="text-2xl lg:text-3xl font-bold">Experience</h2>
            <article>
              <h3>Web development Intern - Djezzy</h3>
              <p className="mx-10 ">
                During my internship at Djezzy, I gained hands-on experience in
                building a full stack responsive web application
              </p>
            </article>
          </section>
          <br />
          <section id="education">
            <h2 className="text-2xl lg:text-3xl font-bold">Education</h2>
            <article className="mx-10">
              <h3>Epitech Paris - Masters of Science in Computer Science</h3>
              <p>Expected Graduation: july 2026</p>
              <h3>
                Algiers University - Bachelor of Science in Computer Science
              </h3>
              <p> Graduation: july 2023</p>
            </article>
          </section>
          <br />
          <Socials />
        </div>
        <footer>
          <p>&copy; 2023 Layaida Samy</p>
        </footer>
      </div>
    </main>
  );
}

export default page;
