"use client";

import Image from "next/image";
import myImage from "/public/tomilola.webp";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="maxContainer pSm my-8 flexCenter flex-col gap-y-6">
      <div className="w-full max-w-80 flexCenter flex-col gap-4 text-center text-pretty">
        <AnimatePresence>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{
              duration: 0.7,
              ease: "easeIn",
            }}
            className=""
          >
            <Image
              src={myImage}
              alt="picture of tomilola"
              className="rounded-full w-[200px]"
            />
          </motion.div>
        </AnimatePresence>
        <h1 className="font-bold text-lg mb-0">Tomilola Oluwafemi</h1>
        <p className="text-sm">
          I am a certified software engineer with over{" "}
          <span className="text-primary font-semibold">five</span> years of
          experience specialized in web development.
        </p>
        <div className="flexBetween gap-2">
          <Link
            href="mailto:tomilolaoluwafemi.ng@gmail.com"
            className="border border-primary text-primary rounded p-1 px-3"
          >
            Mail me
          </Link>
          <Link
            href="https://wa.me/+2349080347640"
            className="textBg rounded p-1 px-3"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
