"use client";

import DevImg from "../reusables/DevImg";

import {
  User2,
  MailIcon,
  PhoneCall,
  GraduationCap,
  SchoolIcon,
} from "lucide-react";
import { _info_data } from "@/types";
import { motion } from "framer-motion";

const infoData: _info_data[] = [
  {
    icon: <User2 size={20} />,
    text: "Tomilola Oluwafemi",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+234 7013 002 604",
  },
  {
    icon: <MailIcon size={20} />,
    text: "tomilolaoluwafemi.ng@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Software Engineer Diplomat Holder.",
  },
  {
    icon: <SchoolIcon size={20} />,
    text: "BSC University of Lagos",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AboutSection() {
  return (
    <section className="flex justify-between items-center flex-col gap-y-6 md:flex-row maxContainer pSm py-12">
      <motion.div variants={itemVariants} className="md:w-2/5">
        <DevImg />
      </motion.div>
      <div className="md:w-2/5">
        <motion.div variants={itemVariants}>
          <div className="text-sm uppercase text-center md:text-left font-semibold mb-4 text-primary tracking-[4px]">
            About me
          </div>
        </motion.div>
        <div className="text-sm mt-12 xl:mt-8 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">
            Unmatched Service Quality for Over 5 years
          </h3>
          <p className="text-muted-foreground max-w-[490] max-auto xl:mx-0">
            I specialize in crafting intuitive websites with cutting-edge
            technology, delivering dynamic and engaging user experiences
          </p>

          <div className="grid gap-4 mb-12 mt-4">
            {infoData.map((item, index) => {
              return (
                <div
                  className="flex items-center gap-x-4 mx-auto xl:mx-0"
                  key={index}
                >
                  <div className="text-primary ">{item.icon}</div>
                  <div>{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
