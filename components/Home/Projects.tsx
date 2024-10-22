"use client";

import { motion } from "framer-motion";
import ProjectCard from "../reusables/ProjectCard";

const projects = [
  {
    title: "Grouby",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring user authentication, product management, and secure checkout.",
    image: "/images/grouby.webp",
    liveLink: "https://grouby.com.ng",
  },
  {
    title: "Rodela Cleaners",
    description:
      "A modern cleaning landing page built with Next.js, Rodela Cleaners is the best cleaning company in Nigeria.",
    image: "/images/rodelacleaners.webp",
    liveLink: "https://cleaners.rodelahomes.com.ng/",
  },
  {
    title: "Kara",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring user authentication, product management, and secure checkout.",
    image: "/images/kara.webp",
    liveLink: "https://kara-spa.vercel.app/",
  },
  {
    title: "Rodela Homes",
    description:
      "A comprehensive real estate platform, allowing users to find properties. With advanced search interface and top notch SEO.",
    image: "/images/rodelahomes.webp",
    liveLink: "https://rodelahomes.com.ng/",
  },
  {
    title: "Healthpadi",
    description:
      "A modern health blogging platform designed to share valuable wellness information. Using clean user interface",
    image: "/images/healthpadi.webp",
    liveLink: "https://health-padi-psi.vercel.app/",
  },
  {
    title: "Lazy Reader",
    description:
      "An innovative app that transforms the reading experience by providing audio summaries of eBooks. perfect for busy individuals.",
    image: "/images/lazyreader.webp",
    liveLink: "http://lazyreader.vercel.app/",
  },
  {
    title: "Chat App",
    description:
      "A modern Landing page for a sleek and user-friendly chat application that promises the 'best chat' experience.",
    image: "/images/chatapp.webp",
    liveLink: "https://chatapp-nine-gamma.vercel.app/",
  },
  {
    title: "Royal Coast",
    description:
      "A pioneering tech solution provider in Africa, boasting over 13 years of experience. Showcase/Ecommerce",
    image: "/images/royalcoast.webp",
    liveLink: "https://royalcoast.vercel.app/",
  },
  {
    title: "CNG Experts",
    description:
      "SEO blogging platform, for the leading resource for CNG (Compressed Natural Gas) conversion and technology in Nigeria.",
    image: "/images/cngexperts.webp",
    liveLink: "https://cngexperts-com-ng.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
