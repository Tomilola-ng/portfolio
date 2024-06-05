import Link from "next/link";

export default function ViewResume() {
  return (
    <section className="pSm maxContainer mb-8">
      <hr />
      <Link
        href="https://docs.google.com/document/d/1js470jd0Qxtopj3iVPIKsj18ZdCXny02_cUsR1LmSbY/edit?usp=sharing"
        target="_blank"
        className="bg-neutral-800 block rounded text-3xl font-bold flexCenter text-white w-full py-4 mt-8"
      >
        Live Resume (CV)
      </Link>
    </section>
  );
}
