import Image from "next/image";
import Link from "next/link";

export default function About() {
  const slLink = (
    <Link href="https://scottylabs.org" className="text-lg underline">
      ScottyLabs
    </Link>
  );

  const thLink = (
    <Link href="https://tartanhacks.org" className="text-lg underline">
      TartanHacks
    </Link>
  );

  const ccLink = (
    <Link
      href="https://crashcourse.scottylabs.org"
      className="text-lg underline"
    >
      CrashCourse
    </Link>
  );
  return (
    <div className="flex justify-end align-middle gap-10 mt-64">
      <Image
        src="/scottylabs.svg"
        width={120}
        height={120}
        alt="Scottylabs Logo"
        className="animate-bounce hidden md:flex"
      ></Image>
      <div className="bg-primary-yellow py-6 pl-2 md:pl-[20%] pr-2 text-left md:w-2/3">
        <h1 className="text-5xl font-extrabold"> Who we are</h1>
        <p className="my-4 text-lg max-w-lg">
          The Portfolio Development Fair is run by {slLink}
        </p>
        <p className="text-lg max-w-lg">
          You may have seen us host {thLink} (CMU&apos;s largest software
          hackathon) and educational events like {ccLink} around campus!
        </p>
      </div>
    </div>
  );
}
