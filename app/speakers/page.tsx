import Image from "next/image";

export default function Speakers() {
  return (
    <div>
      <Image
        src="/speakers.png"
        alt="Speakers"
        width={1440}
        height={1882}
        className="w-full max-w-4xl mx-auto py-12"
      />
    </div>
  );
}
