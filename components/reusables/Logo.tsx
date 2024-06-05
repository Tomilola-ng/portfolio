import Link from "next/link";

export default function Logo() {
  return (
    <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
      <Link
        href="/"
        className="hover:underline decoration-wavy transition-all duration-300"
      >
        Tomilola
      </Link>
    </div>
  );
}
