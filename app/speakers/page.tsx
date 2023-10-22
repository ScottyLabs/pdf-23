import About from "@/components/about";
import Image from "next/image";

export default function Speakers() {
  return (
    <div>
      <img src="/speakers.svg" alt="Speakers" className="w-2/3 mx-auto py-12" />
      <About />
    </div>
  );
}
