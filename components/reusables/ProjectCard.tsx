"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div
      key={project.link}
      className="flex flex-col shadow-sm bg-neutral-200 p-4 py-6 rounded group"
    >
      <motion.a
        href={`${project.link}`}
        target="_blank"
        rel="noreferrer"
        whileHover={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 150, 150, 0],
          borderRadius: ["10%", "20%", "50%", "50%", "50%"],
        }}
        className="mb-4 aspect-square overflow-hidden flexCenter rounded relative"
      >
        <img src={project.photo} alt={project.title} />
      </motion.a>
      <h3 className="text-black font-semibold">{project.title}</h3>
      <p className=" text-gray-800 mt-1 text-xs">{project.description}</p>
      <div className="mt-5">
        <a
          href={`${project.link}`}
          className="transition-all duration-500 bg-primary py-1 px-3 rounded text-white hover:bg-white hover:text-primary text-sm"
        >
          View Live
        </a>
      </div>
    </div>
  );
}
