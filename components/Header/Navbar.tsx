"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MENU_LINKS } from "@/lib/constants";

export const Navbar = () => {
  return (
    <motion.div className="md:hidden bg-white border-b w-full absolute top-16 left-0 transition-all">
      {MENU_LINKS.map((item: any) => (
        <Link
          href={item.url}
          key={item.url}
          className="py-3 pl-4 border-b hover:textBg transition-all block"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
};
