import Image from "next/image";
import Tomi from "/public/tomi.webp";

export default function DevImg() {
  return (
    <figure className="relative w-full h-full">
      <Image
        src={Tomi}
        alt="Picture of Tomilola Oluwafemi"
        className="rounded-full w-full h-full shadow-md"
      />
    </figure>
  );
}
