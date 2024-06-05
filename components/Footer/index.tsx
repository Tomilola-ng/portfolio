import Link from "next/link";
import Logo from "../reusables/Logo";
import { MENU_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      role="navigation"
      className="w-full bg-neutral-900 py-8 md:px-8 mt-6 text-neutral-100"
    >
      <div className="maxContainer grid md:grid-cols-3 gap-y-6 gap-x-4 pSm">
        <Logo />
        <div className="flex flex-col gap-y-2 text-sm">
          <b>Company</b>
          FIDO is a leading provider of innovative solutions tailored to meet
          the unique needs of startups and small businesses.
        </div>
        <div className="flex flex-col gap-y-2 text-sm">
          <b>Resources</b>
          {MENU_LINKS.map((item) => (
            <Link href={item.url} key={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
        <hr className="h-4 md:col-span-3 mt-6" />
        <div className="flexCenter text-sm md:col-span-3">
          Copyright © 2024. Fido Ltd
        </div>
      </div>
    </footer>
  );
}
