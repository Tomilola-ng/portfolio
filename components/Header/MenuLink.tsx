import Link from "next/link";

export default function MenuLink({
  url,
  label,
  extra,
}: {
  url: string;
  label: string;
  extra?: boolean;
}) {
  return (
    <Link
      href={url}
      className={`underline hover:decoration-primary decoration-transparent transition-all text-sm ${
        extra && "textBg rounded-full px-3 py-1 hover:decoration-white"
      }`}
    >
      {label}
    </Link>
  );
}
