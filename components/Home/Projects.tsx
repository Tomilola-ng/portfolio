import { PROJECTS } from "@/lib/constants";
import ProjectCard from "../reusables/ProjectCard";

export default function ProjectSection() {
  return (
    <section className="max-w-[800px] mx-auto px-3 md:px-0">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Featured Projects
      </h1>
      <p className="my-3 text-neutral-700 md:w-3/4 leading-4">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-6 items-center justify-center">
        {PROJECTS.map((project) => (
          <ProjectCard project={project} key={project.link} />
        ))}
      </div>
    </section>
  );
}
