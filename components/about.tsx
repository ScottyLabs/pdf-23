import Image from "next/image";
import Link from "next/link";
import Scotty from "./scotty";

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
    <div className="flex relative justify-end items-center gap-10 mt-64">
      <div className="absolute -z-10 md:z-10 md:right-48 bottom-64 md:bottom-0 right-0 w-full h-64 md:h-full">
        <Scotty />
      </div>
      <div className="bg-primary-yellow py-16 md:pl-[15%] px-2 w-full text-left md:w-2/3">
        <h1 className="text-5xl font-extrabold">Who we are</h1>
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
