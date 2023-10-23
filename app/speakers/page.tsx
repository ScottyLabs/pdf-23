import Image from "next/image";

export default function Speakers() {
  return (
    <div>
      <Image
        src="/speakers.svg"
        alt="Speakers"
        width={256}
        height={256}
        className="w-full max-w-4xl mx-auto py-12"
      />
    </div>
  );
}
